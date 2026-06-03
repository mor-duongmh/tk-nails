#!/usr/bin/env bash
#
# Full deploy of the TK Nails static site to IONOS webspace.
#
#   Usage:  npm run deploy        (or:  ./scripts/deploy.sh)
#
# Runs the whole pipeline in one go:
#   1. git pull   – fetch the latest code
#   2. npm install – sync dependencies
#   3. next build  – generate the static export (out/)
#   4. lftp mirror – upload out/ to the IONOS webspace over SFTP
#
# You will be prompted for the IONOS SFTP password (it is NOT stored anywhere).
# Requires: lftp   (install on macOS:  brew install lftp)
#
set -euo pipefail

SFTP_HOST="access-5020131689.webspace-host.com"
SFTP_USER="a2249573"
REMOTE_DIR="./"   # IONOS webspace root = SFTP login dir. Change if your docroot is a subfolder.

# Move to repo root (this script lives in scripts/)
cd "$(dirname "$0")/.."

if ! command -v lftp >/dev/null 2>&1; then
  echo "✗ lftp is required but not installed."
  echo "  Install it with:  brew install lftp"
  exit 1
fi

echo "▶ [1/4] Pulling latest code ..."
if [ -d .git ]; then
  git pull --ff-only || echo "  (skipped: local branch not fast-forwardable — resolve manually)"
else
  echo "  (skipped: not a git repository)"
fi

echo "▶ [2/4] Installing dependencies ..."
npm install --no-audit --no-fund

echo "▶ [3/4] Building static export (out/) ..."
npm run build

echo "▶ [4/4] Uploading out/ → ${SFTP_USER}@${SFTP_HOST}:${REMOTE_DIR}"
echo "        (you'll be asked for the IONOS SFTP password)"
lftp "sftp://${SFTP_USER}@${SFTP_HOST}" -e "
  set sftp:auto-confirm yes;
  mirror --reverse --delete --verbose out/ ${REMOTE_DIR};
  bye
"

echo "✓ Deploy complete."
