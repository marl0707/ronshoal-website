"""Install only the intake's pinned official CLI; leave global gws unchanged."""
import hashlib
import io
import json
import os
import subprocess
import tarfile
import urllib.request
from pathlib import Path

URL = 'https://github.com/googleworkspace/cli/releases/download/v0.14.0/gws-x86_64-unknown-linux-gnu.tar.gz'
SHA256 = 'b9e3c7e6e5232c0488be5dbc84227e40c9d40212e8f025569110eb403eabaf9b'
TARGET = Path('/home/antigravity/cockpit/runtime/appco/gws-0.14.0/gws')

if not TARGET.exists():
    archive = urllib.request.urlopen(URL, timeout=45).read()
    assert hashlib.sha256(archive).hexdigest() == SHA256, 'Official archive digest mismatch'
    with tarfile.open(fileobj=io.BytesIO(archive), mode='r:gz') as tar:
        members = [m for m in tar.getmembers() if m.isfile() and Path(m.name).name == 'gws']
        assert len(members) == 1
        binary = tar.extractfile(members[0]).read()
    TARGET.parent.mkdir(parents=True, exist_ok=True)
    tmp = TARGET.with_suffix('.new')
    tmp.write_bytes(binary)
    os.chmod(tmp, 0o700)
    os.replace(tmp, TARGET)

version = subprocess.run([str(TARGET), '--version'], capture_output=True, text=True, check=True)
assert 'gws 0.14.0' in version.stdout
help_result = subprocess.run([str(TARGET), 'gmail', 'users', 'messages', 'send', '--help'],
                             capture_output=True, text=True, check=True)
assert '--upload-content-type' in help_result.stdout
print(json.dumps({'runtime': str(TARGET), 'version': '0.14.0',
                  'binary_sha256': hashlib.sha256(TARGET.read_bytes()).hexdigest()}))
