#!/usr/bin/env node
/**
 * Migrates @secretdef/* packages to extract dashboard URLs from description strings.
 *
 * Before: description: 'OpenAI API key — https://platform.openai.com/api-keys'
 * After:  description: 'OpenAI API key',
 *         dashboard: 'https://platform.openai.com/api-keys'
 */

import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const packagesDir = join(process.cwd(), 'packages', '@secretdef');

const packages = readdirSync(packagesDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

let migrated = 0;
let skipped = 0;

for (const pkg of packages) {
  const indexPath = join(packagesDir, pkg, 'index.ts');
  let content;
  try {
    content = readFileSync(indexPath, 'utf-8');
  } catch {
    skipped++;
    continue;
  }

  // Already has dashboard field — skip
  if (content.includes('dashboard:')) {
    skipped++;
    continue;
  }

  // Match description lines with em dash + URL
  // Handles both single-quote and double-quote strings, including multi-line concatenation
  const updated = content.replace(
    /description:\s*'([^']*?)\s*—\s*(https?:\/\/[^']+)'/g,
    (_, text, url) => {
      return `description: '${text.trim()}',\n    dashboard: '${url.trim()}'`;
    }
  ).replace(
    /description:\s*"([^"]*?)\s*—\s*(https?:\/\/[^"]+)"/g,
    (_, text, url) => {
      return `description: '${text.trim()}',\n    dashboard: '${url.trim()}'`;
    }
  );

  if (updated !== content) {
    writeFileSync(indexPath, updated);
    migrated++;
    console.log(`  ✓ ${pkg}`);
  } else {
    skipped++;
  }
}

console.log(`\nDone: ${migrated} migrated, ${skipped} skipped`);
