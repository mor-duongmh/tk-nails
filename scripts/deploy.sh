#!/usr/bin/env bash
#
# Deploy the TK Nails static site to IONOS webspace via SFTP.
#
#   Usage:  ./scripts/deploy.sh
#
# Builds the static export (out/) and mirrors it to the IONOS webspace root.
# You will be prompted for the IONOS SFTP password (it is NOT stored anywhere).
#
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

echo "▶ Building static export (out/) ..."
npm run build

echo "▶ Uploading out/ → ${SFTP_USER}@${SFTP_HOST}:${REMOTE_DIR}"
echo "  (you'll be asked for the IONOS SFTP password)"
lftp "sftp://${SFTP_USER}@${SFTP_HOST}" -e "
  set sftp:auto-confirm yes;
  mirror --reverse --delete --verbose out/ ${REMOTE_DIR};
  bye
"

echo "✓ Deploy complete."
