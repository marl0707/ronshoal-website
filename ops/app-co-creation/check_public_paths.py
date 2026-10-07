"""Fail closed if an intake route is only reachable on localhost.

Keep the gateway prefix when constructing URLs. This check performs only
invalid/unauthenticated requests and cannot create a receipt or send an email.
"""
import argparse
import json
import urllib.error
import urllib.request
from pathlib import Path
from urllib.parse import urljoin

p = argparse.ArgumentParser()
p.add_argument('--gateway', action='store_true')
p.add_argument('--gateway-base-url', default='https://line-incruises.ronshoal.com/ai-chat/')
args = p.parse_args()


def probe(url, expected, headers, body=b'{}'):
    request = urllib.request.Request(url, data=body, headers=headers)
    try:
        with urllib.request.urlopen(request, timeout=15) as r:
            status = r.status
    except urllib.error.HTTPError as e:
        status = e.code
    print(json.dumps({'expected': expected, 'actual': status, 'pass': status == expected}))
    if status != expected:
        raise SystemExit('Public intake route check failed; publication must stop.')


headers = {'Content-Type': 'application/json'}
if args.gateway:
    url = urljoin(args.gateway_base_url.rstrip('/') + '/', 'intake/app-co-creation')
    probe(url, 401, headers)
    headers['X-Chat-Secret'] = Path('/home/antigravity/secrets/malaysia_chat_secret.txt').read_text().strip()
    headers['X-Intake-Client'] = 'a' * 64
    probe(url, 400, headers)
else:
    url = 'https://www.ronshoal.com/api/app-co-creation'
    probe(url, 403, headers)
    headers['Origin'] = 'https://www.ronshoal.com'
    probe(url, 400, headers)
