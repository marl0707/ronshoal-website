"""Private intake records and fixed-recipient Gmail notifications.

Mounted by the existing server-to-server gateway. No Gmail credentials leave
the server. This module never logs submitted fields or mail/API response bodies.
"""
from __future__ import annotations

import asyncio
import fcntl
import hashlib
import hmac
import json
import os
import re
import subprocess
import tempfile
import time
from contextlib import contextmanager, asynccontextmanager
from datetime import datetime, timezone
from email.message import EmailMessage
from pathlib import Path
from uuid import UUID

from fastapi import HTTPException, Request

ROOT = Path('/home/antigravity/cockpit/data_local_mirror/app_co_creation')
RECIPIENT = 'info@ronshoal.com'
SENDER = 'sejimakazuki@ronshoal.com'
GWS = '/home/antigravity/cockpit/runtime/appco/gws-0.14.0/gws'
POLICY_VERSION = '2026-10-07'
MAX_BYTES = 65_536
FIELDS = [
    ('name', 'お名前', 160, True), ('email', 'メールアドレス', 254, True),
    ('idea', '作りたいアプリ', 3000, True), ('users', '使ってほしい人', 1000, True),
    ('goal', '解決したいこと・実現したいこと', 2000, True),
    ('activity', '現在の事業・活動', 1000, False), ('features', '欲しい機能', 2000, False),
    ('references', '参考例', 1000, False), ('marketing', '販売・集客', 1000, False),
    ('monetization', '収益化の考え', 300, False), ('integrations', '保存・外部連携', 1000, False),
    ('materials', '素材と現在の権利者', 1000, False), ('timing', '希望時期', 300, False),
    ('questions', '相談したいこと', 2000, False),
]
EMAIL = re.compile(r'^[A-Za-z0-9.!#$%&\x27*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9.-]*[A-Za-z0-9])?\.[A-Za-z]{2,63}$')


def _prepare_root():
    ROOT.mkdir(parents=True, exist_ok=True, mode=0o700)
    os.chmod(ROOT, 0o700)
    (ROOT / 'submissions').mkdir(exist_ok=True, mode=0o700)


@contextmanager
def _lock(path):
    fd = os.open(path, os.O_CREAT | os.O_RDWR, 0o600)
    with os.fdopen(fd, 'a+') as f:
        fcntl.flock(f, fcntl.LOCK_EX)
        yield


def _write(path, record):
    tmp = path.with_suffix('.tmp')
    fd = os.open(tmp, os.O_CREAT | os.O_TRUNC | os.O_WRONLY, 0o600)
    with os.fdopen(fd, 'w') as f:
        json.dump(record, f, ensure_ascii=False)
        f.flush()
        os.fsync(f.fileno())
    os.replace(tmp, path)


def validate(body):
    if not isinstance(body, dict):
        raise HTTPException(400, 'invalid_request')
    try:
        request_id = str(UUID(body.get('requestId', '')))
    except (ValueError, TypeError, AttributeError):
        raise HTTPException(400, 'invalid_request_id') from None
    if body.get('website') or body.get('acknowledged') is not True:
        raise HTTPException(400, 'confirmation_required')
    if body.get('policyVersion') != POLICY_VERSION:
        raise HTTPException(400, 'confirmation_required')
    started = body.get('startedAt')
    if (not isinstance(started, (int, float)) or isinstance(started, bool)
            or not 1000 <= time.time() * 1000 - started <= 7 * 86400 * 1000):
        raise HTTPException(400, 'invalid_request')
    fields = {}
    for key, _, limit, required in FIELDS:
        value = body.get(key, '')
        if not isinstance(value, str):
            raise HTTPException(400, 'invalid_fields')
        value = value.strip()
        if (required and not value) or len(value) > limit or '\x00' in value:
            raise HTTPException(400, 'invalid_fields')
        fields[key] = value
    if not EMAIL.fullmatch(fields['email']):
        raise HTTPException(400, 'invalid_email')
    return request_id, fields


def _reserve(client_key):
    now = time.time()
    path = ROOT / 'rate.json'
    with _lock(ROOT / 'rate.lock'):
        data = json.loads(path.read_text()) if path.exists() else []
        data = [x for x in data if now - x['time'] < 86400]
        hits = sum(x['client'] == client_key and now - x['time'] < 3600 for x in data)
        if hits >= 5 or len(data) >= 50:
            raise HTTPException(429, 'too_many_requests', headers={'Retry-After': '3600'})
        data.append({'time': now, 'client': client_key})
        _write(path, data)


def _gws(resource, method, params, body=None, timeout=15, upload=None):
    cmd = [GWS, 'gmail', 'users', resource, method, '--params', json.dumps(params)]
    if body is not None:
        cmd += ['--json', json.dumps(body)]
    if upload is not None:
        cmd += ['--upload', upload.name, '--upload-content-type', 'message/rfc822']
    result = subprocess.run(cmd, cwd=ROOT if upload is not None else None,
                            capture_output=True, text=True, timeout=timeout)
    if result.returncode:
        raise RuntimeError('gmail_operation_failed')
    payload = json.loads(result.stdout)
    if not isinstance(payload, dict) or 'error' in payload:
        raise RuntimeError('gmail_operation_failed')
    return payload


def _notify(record):
    """Search the unique receipt in Subject; Gmail may replace Message-ID."""
    message_id = record.get('gmail_message_id')
    if not message_id:
        found = _gws('messages', 'list', {
            'userId': 'me', 'q': f'in:anywhere to:{RECIPIENT} subject:{record["id"]}',
            'maxResults': 2, 'fields': 'messages(id),resultSizeEstimate',
        }, timeout=10)
        messages = found.get('messages', [])
        if not isinstance(messages, list) or (not messages and found.get('resultSizeEstimate') != 0):
            raise RuntimeError('gmail_search_result_unconfirmed')
        if messages:
            message_id = messages[0]['id']
        else:
            if time.time() - record.get('mail_attempted_at', 0) < 120:
                raise RuntimeError('gmail_search_settling')
            message = EmailMessage()
            message['From'] = SENDER
            message['To'] = RECIPIENT
            message['Reply-To'] = record['fields']['email']
            message['Message-ID'] = f'<appco.{record["id"]}@ronshoal.com>'
            message['Subject'] = f'【iOSアプリ共同開発】相談受付 {record["id"]}'
            lines = [f'受付番号: {record["id"]}', f'受付日時: {record["created_at"]}',
                     '受付ページ: https://www.ronshoal.com/app-co-creation.html',
                     f'相談条件・取扱い案内の確認版: {record["policy_version"]}', '',
                     '以下は相談者の入力内容です。開発契約・料金の支払いは確定していません。', '']
            for key, label, _, _ in FIELDS:
                if record['fields'][key]:
                    lines += [f'■ {label}', record['fields'][key], '']
            message.set_content('\n'.join(lines))
            record['mail_attempted_at'] = time.time()
            _write(ROOT / 'submissions' / f'{record["id"]}.json', record)
            # Keep submitted personal data out of command-line arguments.
            with tempfile.NamedTemporaryFile(dir=ROOT, suffix='.eml', delete=False) as f:
                f.write(message.as_bytes())
                upload = Path(f.name)
            try:
                payload = _gws('messages', 'send', {
                    'userId': 'me', 'fields': 'id,threadId,labelIds',
                }, timeout=20, upload=upload)
            finally:
                upload.unlink(missing_ok=True)
            message_id = payload.get('id')
            if not message_id:
                raise RuntimeError('gmail_receipt_missing')
        record['gmail_message_id'] = message_id
        _write(ROOT / 'submissions' / f'{record["id"]}.json', record)
    # Self-notifications may otherwise appear only in Sent. The authenticated
    # mailbox already receives info@ mail; ensure this notification is visible.
    receipt = _gws('messages', 'modify', {
        'userId': 'me', 'id': message_id, 'fields': 'id,labelIds',
    }, {'addLabelIds': ['INBOX', 'UNREAD']}, timeout=10)
    if 'INBOX' not in receipt.get('labelIds', []):
        raise RuntimeError('gmail_inbox_receipt_missing')
    record['notification_status'] = 'notified'
    record['notified_at'] = datetime.now(timezone.utc).isoformat()
    _write(ROOT / 'submissions' / f'{record["id"]}.json', record)


def receive(body, client_key):
    request_id, fields = validate(body)
    if not re.fullmatch(r'[a-f0-9]{64}', client_key):
        raise HTTPException(400, 'invalid_client_key')
    digest = hashlib.sha256(json.dumps(fields, sort_keys=True, ensure_ascii=False).encode()).hexdigest()
    _prepare_root()
    path = ROOT / 'submissions' / f'{request_id}.json'
    with _lock(ROOT / f'{request_id}.lock'):
        if path.exists():
            record = json.loads(path.read_text())
            if record['payload_hash'] != digest or record['client_key'] != client_key:
                raise HTTPException(409, 'request_id_conflict')
        else:
            _reserve(client_key)
            record = {
                'id': request_id, 'created_at': datetime.now(timezone.utc).isoformat(),
                'policy_version': POLICY_VERSION, 'acknowledged': True,
                'fields': fields, 'payload_hash': digest, 'client_key': client_key,
                'notification_status': 'pending',
            }
            _write(path, record)
        if record['notification_status'] != 'notified':
            try:
                _notify(record)
            except (RuntimeError, ValueError, OSError, subprocess.SubprocessError):
                # The private record remains available to the retry worker.
                raise HTTPException(503, 'notification_pending') from None
    return {'accepted': True, 'receiptId': request_id}


def install(app, secret):
    worker_state = {'running': False, 'last_check': None, 'last_check_ok': None}

    async def worker():
        from starlette.concurrency import run_in_threadpool
        while True:
            try:
                code = await run_in_threadpool(retry_pending)
                worker_state['last_check_ok'] = code == 0
            except Exception:
                worker_state['last_check_ok'] = False
            worker_state['last_check'] = datetime.now(timezone.utc).isoformat()
            await asyncio.sleep(300)

    async def start_worker():
        app.state.app_co_creation_mail_task = asyncio.create_task(worker())
        worker_state['running'] = True

    async def stop_worker():
        task = app.state.app_co_creation_mail_task
        task.cancel()
        try:
            await task
        except asyncio.CancelledError:
            pass
        worker_state['running'] = False

    previous_lifespan = app.router.lifespan_context

    @asynccontextmanager
    async def lifespan(application):
        async with previous_lifespan(application) as state:
            await start_worker()
            try:
                yield state
            finally:
                await stop_worker()

    app.router.lifespan_context = lifespan

    @app.get('/intake/app-co-creation/status')
    async def status(request: Request):
        if not hmac.compare_digest(request.headers.get('X-Chat-Secret', ''), secret):
            raise HTTPException(401, 'unauthorized')
        return worker_state

    @app.post('/intake/app-co-creation')
    async def intake(request: Request):
        if not hmac.compare_digest(request.headers.get('X-Chat-Secret', ''), secret):
            raise HTTPException(401, 'unauthorized')
        raw = await request.body()
        if len(raw) > MAX_BYTES:
            raise HTTPException(413, 'request_too_large')
        try:
            body = json.loads(raw)
        except (ValueError, UnicodeError):
            raise HTTPException(400, 'invalid_json') from None
        # Gmail subprocesses must not block the gateway event loop.
        from starlette.concurrency import run_in_threadpool
        return await run_in_threadpool(receive, body, request.headers.get('X-Intake-Client', ''))


def retry_pending():
    _prepare_root()
    failures = 0
    processed = 0
    for path in sorted((ROOT / 'submissions').glob('*.json')):
        with _lock(ROOT / f'{path.stem}.lock'):
            record = json.loads(path.read_text())
            if record['notification_status'] == 'notified':
                continue
            processed += 1
            try:
                _notify(record)
            except (RuntimeError, ValueError, OSError, subprocess.SubprocessError):
                failures += 1
        if processed >= 20:
            break
    print(json.dumps({'processed': processed, 'failures': failures}))
    return 1 if failures else 0


if __name__ == '__main__':
    raise SystemExit(retry_pending())
