import json
import subprocess
import tempfile
import time
import unittest
from pathlib import Path
from unittest.mock import patch
from uuid import uuid4
from email import policy
from email.parser import BytesParser

from fastapi import FastAPI, HTTPException
from fastapi.testclient import TestClient
import app_co_creation_intake as intake


class IntakeTests(unittest.TestCase):
    def setUp(self):
        self.directory = tempfile.TemporaryDirectory()
        self.root = Path(self.directory.name)
        self.path_patch = patch.object(intake, 'ROOT', self.root)
        self.path_patch.start()
        self.body = {
            'requestId': str(uuid4()), 'startedAt': time.time() * 1000 - 5000,
            'policyVersion': intake.POLICY_VERSION, 'acknowledged': True,
            'name': '動作確認用', 'email': 'form-test@example.com',
            'idea': '送信動作の確認です。開発依頼ではありません。',
            'users': '確認用', 'goal': '確認用',
        }
        self.app = FastAPI()
        intake.install(self.app, 'test-secret-not-production')
        self.client = TestClient(self.app)
        self.headers = {'X-Chat-Secret': 'test-secret-not-production', 'X-Intake-Client': 'a' * 64}

    def tearDown(self):
        self.path_patch.stop()
        self.directory.cleanup()

    def notified(self, record):
        record['notification_status'] = 'notified'
        intake._write(self.root / 'submissions' / f'{record["id"]}.json', record)

    def test_route_accepts_and_deduplicates(self):
        with patch.object(intake, '_notify', side_effect=self.notified) as notify:
            first = self.client.post('/intake/app-co-creation', json=self.body, headers=self.headers)
            second = self.client.post('/intake/app-co-creation', json=self.body, headers=self.headers)
        self.assertEqual(first.status_code, 200)
        self.assertEqual(second.json(), first.json())
        self.assertEqual(notify.call_count, 1)
        self.assertEqual(len(list((self.root / 'submissions').glob('*.json'))), 1)
        self.assertEqual((self.root / 'submissions' / f'{self.body["requestId"]}.json').stat().st_mode & 0o777, 0o600)

    def test_unauthorized_never_records_or_sends(self):
        with patch.object(intake, '_notify') as notify:
            r = self.client.post('/intake/app-co-creation', json=self.body)
        self.assertEqual(r.status_code, 401)
        self.assertFalse((self.root / 'submissions').exists())
        notify.assert_not_called()

    def test_startup_worker_is_wired(self):
        with patch.object(intake, 'retry_pending', return_value=0):
            with TestClient(self.app) as client:
                self.assertEqual(client.get('/intake/app-co-creation/status').status_code, 401)
                status = client.get('/intake/app-co-creation/status', headers=self.headers)
                self.assertTrue(status.json()['running'])

    def test_invalid_inputs_never_notify(self):
        cases = [('name', '  '), ('email', 'a@example.com\r\nBcc: b@example.com'),
                 ('acknowledged', False), ('policyVersion', 'old'), ('website', 'spam'),
                 ('idea', 'a' * 3001), ('requestId', '../../oops'), ('users', []), ('startedAt', 0)]
        with patch.object(intake, '_notify') as notify:
            for key, value in cases:
                with self.subTest(key=key):
                    r = self.client.post('/intake/app-co-creation', json={**self.body, key: value}, headers=self.headers)
                    self.assertEqual(r.status_code, 400)
        notify.assert_not_called()

    def test_large_payload(self):
        r = self.client.post('/intake/app-co-creation', content=json.dumps({'idea': 'x' * 70000}), headers=self.headers)
        self.assertEqual(r.status_code, 413)

    def test_conflicting_retry(self):
        with patch.object(intake, '_notify', side_effect=self.notified):
            intake.receive(self.body, 'a' * 64)
            with self.assertRaises(HTTPException) as caught:
                intake.receive({**self.body, 'idea': 'different'}, 'a' * 64)
        self.assertEqual(caught.exception.status_code, 409)

    def test_rate_limit_and_retry(self):
        with patch.object(intake, '_notify', side_effect=self.notified):
            for _ in range(5):
                intake.receive({**self.body, 'requestId': str(uuid4())}, 'a' * 64)
            with self.assertRaises(HTTPException) as caught:
                intake.receive(self.body, 'a' * 64)
        self.assertEqual(caught.exception.status_code, 429)

    def test_mail_failure_keeps_record_and_worker_recovers(self):
        with patch.object(intake, '_notify', side_effect=RuntimeError('mail unavailable')):
            r = self.client.post('/intake/app-co-creation', json=self.body, headers=self.headers)
            self.assertEqual(r.status_code, 503)
            self.assertEqual(intake.retry_pending(), 1)
        record = json.loads((self.root / 'submissions' / f'{self.body["requestId"]}.json').read_text())
        self.assertEqual(record['notification_status'], 'pending')
        with patch.object(intake, '_notify', side_effect=self.notified) as notify:
            self.assertEqual(intake.retry_pending(), 0)
            result = intake.receive(self.body, 'a' * 64)
        self.assertTrue(result['accepted'])
        self.assertEqual(notify.call_count, 1)

    def test_uncertain_send_is_not_immediately_repeated(self):
        intake._prepare_root()
        record = {'id': self.body['requestId'], 'mail_attempted_at': time.time()}
        with patch.object(intake, '_gws', return_value={'messages': [], 'resultSizeEstimate': 0}) as gmail:
            with self.assertRaises(RuntimeError):
                intake._notify(record)
        self.assertEqual(gmail.call_count, 1)

    def test_unknown_search_result_never_sends(self):
        intake._prepare_root()
        for result in [{}, {'resultSizeEstimate': 1}]:
            with self.subTest(result=result):
                with patch.object(intake, '_gws', return_value=result) as gmail:
                    with self.assertRaises(RuntimeError):
                        intake._notify({'id': self.body['requestId']})
                    self.assertEqual(gmail.call_count, 1)

    def test_existing_receipt_subject_prevents_resend(self):
        intake._prepare_root()
        record = {'id': self.body['requestId'], 'notification_status': 'pending'}
        with patch.object(intake, '_gws', side_effect=[
            {'messages': [{'id': 'existing-mail'}], 'resultSizeEstimate': 1},
            {'id': 'existing-mail', 'labelIds': ['INBOX']},
        ]) as gmail:
            intake._notify(record)
        self.assertEqual([x.args[1] for x in gmail.call_args_list], ['list', 'modify'])
        self.assertIn(f'subject:{record["id"]}', gmail.call_args_list[0].args[2]['q'])
        self.assertEqual(record['gmail_message_id'], 'existing-mail')
        self.assertEqual(record['notification_status'], 'notified')

    def test_empty_mailbox_result_and_private_upload(self):
        intake._prepare_root()
        record = {'id': self.body['requestId'], 'fields': intake.validate(self.body)[1],
                  'created_at': 'test timestamp', 'policy_version': intake.POLICY_VERSION,
                  'notification_status': 'pending'}
        sent = []

        def transport(cmd, **kwargs):
            params = json.loads(cmd[cmd.index('--params') + 1])
            if cmd[4] == 'list':
                self.assertEqual(params['q'], f'in:anywhere to:{intake.RECIPIENT} subject:{record["id"]}')
                # Observed gws behavior: a mask containing only messages(id)
                # produces no stdout when there are no matching messages.
                output = json.dumps({'resultSizeEstimate': 0}) if 'resultSizeEstimate' in params['fields'] else ''
            elif cmd[4] == 'send':
                self.assertNotIn('--json', cmd)
                self.assertEqual(cmd[cmd.index('--upload-content-type') + 1], 'message/rfc822')
                self.assertEqual(cmd[0], intake.GWS)
                self.assertNotIn(self.body['idea'], ' '.join(cmd))
                path = Path(kwargs['cwd']) / cmd[cmd.index('--upload') + 1]
                message = BytesParser(policy=policy.default).parsebytes(path.read_bytes())
                self.assertEqual(str(message['To']), intake.RECIPIENT)
                self.assertEqual(str(message['Reply-To']), self.body['email'])
                self.assertIn(self.body['idea'], message.get_content())
                sent.append(message)
                output = json.dumps({'id': 'test-gmail-id'})
            else:
                output = json.dumps({'id': 'test-gmail-id', 'labelIds': ['INBOX', 'UNREAD']})
            return subprocess.CompletedProcess(cmd, 0, stdout=output, stderr='')

        with patch.object(intake.subprocess, 'run', side_effect=transport):
            intake._notify(record)
        self.assertEqual(record['notification_status'], 'notified')
        self.assertEqual(len(sent), 1)
        self.assertEqual(list(self.root.glob('*.eml')), [])


if __name__ == '__main__':
    unittest.main()
