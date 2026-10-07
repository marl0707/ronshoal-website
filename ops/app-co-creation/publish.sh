#!/usr/bin/env bash
# Corporate website only; local-only route checks cannot authorize publication.
set -euo pipefail
cd /home/antigravity/projects/ronshoal-website
python3 ops/app-co-creation/check_public_paths.py --gateway
test "$(git branch --show-current)" = main
test -z "$(git status --porcelain -uno)"
git fetch origin --quiet
test "$(git rev-list --count HEAD..origin/main)" = 0
git push origin HEAD:main
