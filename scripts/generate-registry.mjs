#!/usr/bin/env node
/**
 * Generates apps/web/data/registry.json from:
 * 1. registry.yaml (featured packages with npm source info)
 * 2. Filesystem scan of packages/@secretdef/* (all community packages)
 *
 * Output: a single flat array of { name, title?, npm?, featured? }
 *
 * Usage: node scripts/generate-registry.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname.replace(/\/$/, '');
const PACKAGES_DIR = path.join(ROOT, 'packages/@secretdef');
const YAML_PATH = path.join(ROOT, 'registry.yaml');
const OUT_PATH = path.join(ROOT, 'apps/web/data/registry.json');

// Top-tier services — get rich cards on the homepage (ordered by importance, not alpha)
const TOP = new Set([
  'openai', 'anthropic', 'stripe', 'aws', 'google-genai',
  'supabase', 'clerk', 'resend', 'vercel', 'cloudflare',
  'firebase', 'twilio', 'sendgrid', 'github', 'sentry',
  'auth0', 'redis', 'mongodb', 'postmark', 'groq',
  'mistral', 'replicate', 'pinecone', 'neon', 'upstash',
  'planetscale', 'datadog', 'algolia', 'contentful', 'sanity',
  'shopify', 'slack', 'discord', 'linear', 'livekit',
  'azure-openai', 'cohere', 'turso', 'deepgram', 'pusher',
]);

// 1. Parse featured packages from registry.yaml (simple line-by-line, no yaml dep)
const featured = new Map();
try {
  const lines = fs.readFileSync(YAML_PATH, 'utf-8').split('\n');
  let current = null;
  for (const line of lines) {
    const nameMatch = line.match(/^\s+-\s+name:\s+"?@secretdef\/([^"]+)"?\s*$/);
    if (nameMatch) {
      current = { short: nameMatch[1] };
      continue;
    }
    if (!current) continue;
    const titleMatch = line.match(/^\s+title:\s+(.+)$/);
    if (titleMatch) { current.title = titleMatch[1].trim(); continue; }
    const npmMatch = line.match(/^\s+npm:\s+"?([^"]+)"?\s*$/);
    if (npmMatch) { current.npm = npmMatch[1].trim(); continue; }
    const envMatch = line.match(/^\s+hasEnvVars:\s+(\w+)/);
    if (envMatch) {
      if (envMatch[1] === 'true') {
        featured.set(current.short, { title: current.title, npm: current.npm });
      }
      current = null;
      continue;
    }
  }
} catch (e) {
  console.warn('Warning: could not read registry.yaml:', e.message);
}

// 2. Scan filesystem for all @secretdef/* packages
const allNames = [];
try {
  const dirs = fs.readdirSync(PACKAGES_DIR, { withFileTypes: true });
  for (const d of dirs) {
    if (d.isDirectory() && fs.existsSync(path.join(PACKAGES_DIR, d.name, 'index.ts'))) {
      allNames.push(d.name);
    }
  }
  allNames.sort();
} catch (e) {
  console.error('Error scanning packages:', e.message);
  process.exit(1);
}

// 3. Build unified registry
const registry = allNames.map(name => {
  const entry = { name };
  const feat = featured.get(name);
  if (feat) {
    if (feat.title) entry.title = feat.title;
    if (feat.npm) entry.npm = feat.npm;
    entry.featured = true;
    if (TOP.has(name)) entry.top = true;
  }
  return entry;
});

// 4. Write output
const outDir = path.dirname(OUT_PATH);
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(OUT_PATH, JSON.stringify(registry) + '\n');

const featuredCount = registry.filter(r => r.featured).length;
const topCount = registry.filter(r => r.top).length;
console.log(`Generated ${OUT_PATH}`);
console.log(`  ${registry.length} total packages, ${featuredCount} featured, ${topCount} top`);
