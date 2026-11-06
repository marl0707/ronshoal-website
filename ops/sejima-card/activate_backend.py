"""CAS install of isolated card endpoint, with automatic rollback on health failure."""
import hashlib
import json
import os
from pathlib import Path
import subprocess
import time
import urllib.error
import urllib.request

ROOT = Path('/home/antigravity/cockpit')
SOURCE = Path(__file__).parent
GATEWAY = ROOT / 'ronshoal_chat_server.py'
MODULE = ROOT / 'sejima_card_chat.py'
SECRET = ROOT.parent / 'secrets/malaysia_chat_secret.txt'
MARKER = '\n# Public talking business card; shared authentication/provider guards remain intact.\nfrom sejima_card_chat import install as _install_sejima_card\n_install_sejima_card(__import__(__name__, fromlist=["app"]))\n'


def atomic(path, data):
    tmp = path.with_suffix(path.suffix + '.card-new')
    tmp.write_bytes(data)
    os.chmod(tmp, path.stat().st_mode & 0o777 if path.exists() else 0o644)
    os.replace(tmp,path)


def restart():
    subprocess.run(['sudo','-n','/usr/bin/systemctl','restart','ronshoal-chat.service'],check=True)


def status(path, authenticated=False, payload=None):
    headers = {'User-Agent':'ronshoal-card-verify/1.0'}
    if authenticated: headers['X-Chat-Secret']=SECRET.read_text().strip()
    if payload is not None: headers['Content-Type']='application/json'
    request=urllib.request.Request('http://127.0.0.1:8200'+path,
        data=json.dumps(payload).encode() if payload is not None else None,headers=headers)
    try:
        with urllib.request.urlopen(request,timeout=5) as response:return response.status
    except urllib.error.HTTPError as error:return error.code


subprocess.run(['python3','-m','unittest','-v','test_sejima_card_chat'],cwd=SOURCE,check=True)
before=GATEWAY.read_bytes()
candidate=before if MARKER.encode() in before else before+MARKER.encode()
module= (SOURCE / 'sejima_card_chat.py').read_bytes()
compile(candidate.decode(),str(GATEWAY),'exec');compile(module.decode(),str(MODULE),'exec')
prior_module=MODULE.read_bytes() if MODULE.exists() else None
release=ROOT / 'releases' / ('sejima-card-'+hashlib.sha256(before).hexdigest()[:16])
release.mkdir(exist_ok=True,parents=True)
backup=release / 'ronshoal_chat_server.before.py'
if not backup.exists():backup.write_bytes(before)
if prior_module is not None and not (release/'sejima_card_chat.before.py').exists():
    (release/'sejima_card_chat.before.py').write_bytes(prior_module)
assert GATEWAY.read_bytes()==before,'Gateway changed concurrently'
atomic(MODULE,module);atomic(GATEWAY,candidate)
try:
    restart()
    for attempt in range(25):
        try:
            assert status('/health')==200
            assert status('/chat/company',payload={'message':'test'})==401
            assert status('/chat/sejima',payload={'message':'test'})==401
            assert status('/chat/sejima',authenticated=True,payload={'message':'x'*501})==422
            break
        except (OSError,AssertionError):
            if attempt==24:raise
            time.sleep(.4)
except Exception:
    assert GATEWAY.read_bytes()==candidate,'Concurrent change prevents automatic rollback'
    atomic(GATEWAY,before)
    if prior_module is not None:atomic(MODULE,prior_module)
    restart()
    raise
print(json.dumps({'status':'activated','gateway_before_sha256':hashlib.sha256(before).hexdigest(),
    'gateway_after_sha256':hashlib.sha256(candidate).hexdigest(),'backup':str(backup),
    'checks':['health 200','existing company unauthenticated 401','card unauthenticated 401','overlong authenticated card 422']}))
