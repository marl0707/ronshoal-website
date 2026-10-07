"""Install only the intake import/module; preserve unrelated gateway changes."""
import hashlib
import json
import os
import shutil
import subprocess
from pathlib import Path

COCKPIT = Path('/home/antigravity/cockpit')
RELEASE = COCKPIT / 'releases/appco-20261007'
SERVER = COCKPIT / 'ronshoal_chat_server.py'
MODULE = COCKPIT / 'app_co_creation_intake.py'
SOURCE = Path(__file__).parent / MODULE.name
BLOCK = '\n# App co-creation intake: isolated storage/mail path; existing chat routes stay intact.\nfrom app_co_creation_intake import install as _install_app_co_creation_intake\n_install_app_co_creation_intake(app, _SECRET)\n\n'
ANCHOR = '# ─── Prompts ──────────────────────────────────────────────────────────────────'

subprocess.run(['python3', '-m', 'unittest', '-v', 'test_app_co_creation_intake'], cwd=SOURCE.parent, check=True)
original = SERVER.read_bytes()
text = original.decode()
if '_install_app_co_creation_intake' in text:
    raise SystemExit('Already installed; inspect before changing an active module.')
if MODULE.exists():
    raise SystemExit('Module path already exists; inspect before replacing.')
assert text.count(ANCHOR) == 1, 'Anchor is not unique'
candidate = text.replace(ANCHOR, BLOCK + ANCHOR)
compile(candidate, str(SERVER), 'exec')
compile(SOURCE.read_text(), str(MODULE), 'exec')
RELEASE.mkdir(parents=True, exist_ok=True)
backup = RELEASE / 'ronshoal_chat_server.py.before'
if backup.exists():
    raise SystemExit('Backup already exists; inspect previous installation first.')
backup.write_bytes(original)
os.chmod(backup, 0o600)
shutil.copyfile(SOURCE, MODULE)
assert SERVER.read_bytes() == original, 'Concurrent gateway change; stop'
tmp = SERVER.with_suffix('.appco.tmp')
tmp.write_text(candidate)
os.chmod(tmp, SERVER.stat().st_mode & 0o777)
os.replace(tmp, SERVER)
(RELEASE / 'manifest.json').write_text(json.dumps({
    'gateway_before_sha256': hashlib.sha256(original).hexdigest(),
    'gateway_after_sha256': hashlib.sha256(SERVER.read_bytes()).hexdigest(),
    'module_sha256': hashlib.sha256(MODULE.read_bytes()).hexdigest(),
    'rollback': 'Remove only BLOCK from the current gateway file, then restart ronshoal-chat.service. Keep private submissions.',
}, indent=2))
print('Installed intake module and import; service has not been restarted yet.')
