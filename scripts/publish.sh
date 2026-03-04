#!/bin/bash
# Publish @secretdef/* packages to npm
# Uses NPM_TOKEN from .env (automation token, bypasses 2FA)
#
# Token expires every 90 days. To generate a new one:
#   1. Go to https://www.npmjs.com/settings/fmenard/tokens
#   2. Click "Generate New Token" → select "Automation"
#   3. Copy the token and update .env:
#      NPM_TOKEN=npm_xxxxxxxxxxxxxxxx
#
# Usage:
#   ./scripts/publish.sh              # publish all @secretdef/* packages
#   ./scripts/publish.sh openai       # publish only @secretdef/openai
#   ./scripts/publish.sh --dry-run    # dry-run all packages

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
ENV_FILE="$ROOT_DIR/.env"

# Load .env
if [ ! -f "$ENV_FILE" ]; then
  echo ""
  echo "ERROR: .env file not found at $ENV_FILE"
  echo ""
  echo "Create it with your npm automation token:"
  echo "  echo 'NPM_TOKEN=npm_xxxxxxxx' > $ENV_FILE"
  echo ""
  echo "Generate a token at: https://www.npmjs.com/settings/fmenard/tokens"
  echo "  → Click 'Generate New Token' → select 'Automation'"
  echo ""
  exit 1
fi

export $(cat "$ENV_FILE" | grep -v '^#' | xargs)

if [ -z "$NPM_TOKEN" ]; then
  echo ""
  echo "ERROR: NPM_TOKEN not found in .env"
  echo ""
  echo "Add your npm automation token to $ENV_FILE:"
  echo "  NPM_TOKEN=npm_xxxxxxxx"
  echo ""
  echo "Generate a token at: https://www.npmjs.com/settings/fmenard/tokens"
  echo "  → Click 'Generate New Token' → select 'Automation'"
  echo ""
  exit 1
fi

# Parse args
DRY_RUN=""
PACKAGES=()
for arg in "$@"; do
  if [ "$arg" = "--dry-run" ]; then
    DRY_RUN="--dry-run"
  else
    PACKAGES+=("$arg")
  fi
done

# Default: all @secretdef/* packages
if [ ${#PACKAGES[@]} -eq 0 ]; then
  PACKAGES=($(ls "$ROOT_DIR/packages/@secretdef/"))
fi

echo ""
if [ -n "$DRY_RUN" ]; then
  echo "=== Dry-run publish ==="
else
  echo "=== Publishing @secretdef/* packages ==="
fi
echo ""

FAILED=()
SUCCEEDED=()

for pkg in "${PACKAGES[@]}"; do
  pkg_dir="$ROOT_DIR/packages/@secretdef/$pkg"
  if [ ! -d "$pkg_dir" ]; then
    echo "SKIP: @secretdef/$pkg — directory not found"
    continue
  fi

  echo "Publishing @secretdef/$pkg..."
  OUTPUT=$(npm publish "$pkg_dir" \
    --access public \
    --userconfig /dev/null \
    --registry https://registry.npmjs.org/ \
    "--//registry.npmjs.org/:_authToken=$NPM_TOKEN" \
    $DRY_RUN 2>&1) || {

    # Check for token expiry
    if echo "$OUTPUT" | grep -qi "EOTP\|unauthorized\|expired\|revoked\|403\|401"; then
      echo ""
      echo "ERROR: npm token is expired or invalid."
      echo ""
      echo "Generate a new automation token:"
      echo "  1. Go to https://www.npmjs.com/settings/fmenard/tokens"
      echo "  2. Click 'Generate New Token' → select 'Automation'"
      echo "  3. Update $ENV_FILE:"
      echo "     NPM_TOKEN=npm_xxxxxxxx"
      echo ""
      echo "Then re-run: ./scripts/publish.sh"
      echo ""
      exit 1
    fi

    # Check for already-published version
    if echo "$OUTPUT" | grep -qi "cannot publish over"; then
      echo "  SKIP: already published"
      SUCCEEDED+=("$pkg")
      continue
    fi

    echo "  FAILED"
    echo "$OUTPUT" | tail -3
    FAILED+=("$pkg")
    continue
  }

  version=$(echo "$OUTPUT" | grep -o '+.*@[0-9].*' | head -1)
  echo "  OK $version"
  SUCCEEDED+=("$pkg")
done

echo ""
echo "=== Results ==="
echo "Succeeded: ${#SUCCEEDED[@]}"
[ ${#FAILED[@]} -gt 0 ] && echo "Failed: ${FAILED[*]}"
echo ""
