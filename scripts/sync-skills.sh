#!/bin/bash
# scripts/sync-skills.sh — copies the canonical SKILL.md to all required locations
set -e
SOURCE="skills/secretdef/SKILL.md"
cp "$SOURCE" ".claude/skills/secretdef/SKILL.md"
cp "$SOURCE" "packages/secretdef/skills/secretdef/SKILL.md"
echo "✓ SKILL.md synced to all 3 locations"
