"""Test before replacing the active module; rollback on gateway startup failure."""
import hashlib
import json
import os
import subprocess
import time
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path('/home/antigravity/cockpit')
SOURCE = Path(__file__).parent / 'app_co_creation_intake.py'
TARGET = ROOT / SOURCE.name
SECRET = ROOT.parent / 'secrets/malaysia_chat_secret.txt'
RELEASE = ROOT / 'releases/appco-20261007'


def atomic_write(data):
    tmp = TARGET.with_suffix('.verified-new')
    tmp.write_bytes(data)
    os.chmod(tmp, TARGET.stat().st_mode & 0o777)
    os.replace(tmp, TARGET)


def restart():
    subprocess.run(['sudo', '-n', '/usr/bin/systemctl', 'restart', 'ronshoal-chat.service'], check=True)


def verify():
    for _ in range(30):
        try:
            with urllib.request.urlopen('http://127.0.0.1:8200/health', timeout=2) as r:
                assert r.status == 200
            request = urllib.request.Request(
                'https://line-incruises.ronshoal.com/ai-chat/intake/app-co-creation/status',
                headers={'X-Chat-Secret': SECRET.read_text().strip()},
            )
            with urllib.request.urlopen(request, timeout=5) as r:
                status = json.loads(r.read())
            if status.get('running') and status.get('last_check_ok') is True:
                print(json.dumps(status))
                return
        except (OSError, AssertionError):
            pass
        time.sleep(.5)
    raise RuntimeError('Gateway or mail worker startup verification failed')


# Import and lifespan compatibility are exercised by tests, not just py_compile.
subprocess.run(['python3', '-m', 'unittest', '-v', 'test_app_co_creation_intake'], cwd=SOURCE.parent, check=True)
subprocess.run(['python3', str(SOURCE.parent / 'install_mail_runtime.py')], check=True)
candidate = SOURCE.read_bytes()
compile(candidate.decode(), str(TARGET), 'exec')
before = TARGET.read_bytes()
digest = hashlib.sha256(before).hexdigest()
backup = RELEASE / f'app_co_creation_intake.{digest}.before'
backup.write_bytes(before)
assert TARGET.read_bytes() == before, 'Active module changed concurrently'
atomic_write(candidate)
try:
    restart()
    verify()
except Exception:
    assert TARGET.read_bytes() == candidate, 'Concurrent change prevents automatic rollback'
    atomic_write(before)
    restart()
    raise
print('Verified backend activated; previous module preserved.')
