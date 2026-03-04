#!/usr/bin/env node

import { execSync } from "node:child_process";
import { readFileSync, readdirSync, statSync, mkdirSync, rmSync, existsSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";
import { tmpdir } from "node:os";

const ROOT = new URL("..", import.meta.url).pathname.replace(/\/$/, "");
const REGISTRY_PATH = join(ROOT, "registry.yaml");
const CLONE_DIR = join(tmpdir(), "secretdef-scan");
const CONCURRENCY = 5;
const JSON_FLAG = process.argv.includes("--json");
const KEEP_FLAG = process.argv.includes("--keep");

// Parse registry.yaml (minimal parser — no dependency needed)
function parseRegistry() {
  const raw = readFileSync(REGISTRY_PATH, "utf8");
  const packages = [];
  let current = null;
  for (const line of raw.split("\n")) {
    const nameMatch = line.match(/^\s+-\s+name:\s+"?(@secretdef\/\S+)"?/);
    if (nameMatch) {
      current = { name: nameMatch[1] };
      packages.push(current);
      continue;
    }
    if (!current) continue;
    const kvMatch = line.match(/^\s+(\w+):\s+"?([^"\n]+)"?/);
    if (kvMatch && !line.match(/^\s+-/)) {
      let val = kvMatch[2].trim();
      if (val === "true") val = true;
      else if (val === "false") val = false;
      current[kvMatch[1]] = val;
    }
  }
  return packages;
}

// Write hasEnvVars and dateEvaluated back into registry.yaml
function updateRegistry(packages) {
  let raw = readFileSync(REGISTRY_PATH, "utf8");
  for (const pkg of packages) {
    // Find the block for this package and update/add fields
    const nameEscaped = pkg.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const blockRegex = new RegExp(
      `(- name: "${nameEscaped}"[\\s\\S]*?)((?=\\n  - name:)|$)`
    );
    const match = raw.match(blockRegex);
    if (!match) continue;

    let block = match[1];
    // Update or add hasEnvVars
    if (/hasEnvVars:/.test(block)) {
      block = block.replace(/hasEnvVars:\s*\S+/, `hasEnvVars: ${pkg.hasEnvVars}`);
    } else {
      block = block.trimEnd() + `\n    hasEnvVars: ${pkg.hasEnvVars}\n`;
    }
    // Update or add dateEvaluated
    if (/dateEvaluated:/.test(block)) {
      block = block.replace(/dateEvaluated:\s*"?\S+"?/, `dateEvaluated: "${pkg.dateEvaluated}"`);
    } else {
      block = block.trimEnd() + `\n    dateEvaluated: "${pkg.dateEvaluated}"\n`;
    }
    raw = raw.replace(match[1], block);
  }
  writeFileSync(REGISTRY_PATH, raw);
}

// Patterns to match process.env usage and extract env var names
const ENV_PATTERNS = [
  /process\.env\.([A-Z][A-Z0-9_]{2,})/g,
  /process\.env\[['"]([A-Z][A-Z0-9_]{2,})['"]\]/g,
];

// Generic env vars — not service-specific secrets
const IGNORED_VARS = new Set([
  "NODE_ENV", "PORT", "HOST", "HOME", "PATH", "USER", "USERNAME",
  "HOSTNAME", "PWD", "SHELL", "TERM", "LANG", "EDITOR",
  "HTTP_PROXY", "HTTPS_PROXY", "NO_PROXY",
  "CI", "DEBUG", "VERBOSE", "LOG_LEVEL",
  "FORCE_COLOR", "NO_COLOR", "TERM_PROGRAM",
  "NODE_DEBUG", "NODE_OPTIONS", "NODE_PATH",
  "HOMEDRIVE", "HOMEPATH", "LOCALAPPDATA",
  "XDG_DATA_HOME", "XDG_CONFIG_HOME", "XDG_CACHE_HOME",
  "GITHUB_ACTIONS", "GITHUB_EVENT_PATH", "GITHUB_ACCESS_TOKEN",
  "VERCEL", "NETLIFY", "URL",
  "READABLE_STREAM", "TEST_MODE", "LOCAL",
]);

// Directories to skip
const SKIP_DIRS = new Set([
  "node_modules", "dist", ".git", "build", "coverage",
  "__tests__", "test", "tests", "testing",
  "examples", "example", "playground", "playgrounds",
  "scripts", "script", ".yarn", ".github", ".husky",
  "spec", "fixtures", "smoke_test", "e2e",
  "private", "ecosystem-tests",
  ".turbo", ".next", ".cache",
]);

function walk(dir, files = []) {
  let entries;
  try { entries = readdirSync(dir); } catch { return files; }
  for (const entry of entries) {
    if (SKIP_DIRS.has(entry)) continue;
    const full = join(dir, entry);
    const stat = statSync(full, { throwIfNoEntry: false });
    if (!stat) continue;
    if (stat.isDirectory()) {
      walk(full, files);
    } else if (/\.(ts|js|mjs|cjs)$/.test(entry) && !entry.endsWith(".d.ts") && !entry.endsWith(".test.ts") && !entry.endsWith(".spec.ts") && !entry.endsWith(".test.js") && !entry.endsWith(".spec.js")) {
      files.push(full);
    }
  }
  return files;
}

function scanFile(filePath) {
  const content = readFileSync(filePath, "utf8");
  const lines = content.split("\n");
  const found = new Map();
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    for (const pattern of ENV_PATTERNS) {
      pattern.lastIndex = 0;
      let match;
      while ((match = pattern.exec(line)) !== null) {
        const varName = match[1];
        if (!IGNORED_VARS.has(varName) && !found.has(varName)) {
          found.set(varName, i + 1);
        }
      }
    }
  }
  return found;
}

// Read our @secretdef packages to get defined env var names
function readOurDefinitions() {
  const defs = new Map();
  const pkgsDir = join(ROOT, "packages", "@secretdef");
  if (!existsSync(pkgsDir)) return defs;
  for (const pkg of readdirSync(pkgsDir)) {
    const indexPath = join(pkgsDir, pkg, "index.ts");
    if (!existsSync(indexPath)) continue;
    const content = readFileSync(indexPath, "utf8");
    const keys = new Set();
    for (const m of content.matchAll(/^\s+([A-Z][A-Z0-9_]+)\s*:/gm)) {
      keys.add(m[1]);
    }
    defs.set(pkg, keys);
  }
  return defs;
}

function cloneRepo(shortName, repoSlug) {
  const dest = join(CLONE_DIR, shortName);
  if (existsSync(dest)) rmSync(dest, { recursive: true, force: true });
  try {
    execSync(`git clone --depth 1 --single-branch https://github.com/${repoSlug}.git ${dest}`, {
      stdio: "pipe",
      timeout: 120_000,
    });
    return dest;
  } catch {
    return null;
  }
}

async function cloneAll(packages) {
  const results = new Map();
  let i = 0;
  async function next() {
    if (i >= packages.length) return;
    const pkg = packages[i++];
    if (!pkg.repo) { results.set(pkg.name, null); return next(); }
    process.stderr.write(`  Cloning ${pkg.repo}...\n`);
    const dest = await new Promise((resolve) => {
      setImmediate(() => resolve(cloneRepo(pkg.name.replace("@secretdef/", ""), pkg.repo)));
    });
    results.set(pkg.name, dest);
    return next();
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, () => next()));
  return results;
}

async function main() {
  mkdirSync(CLONE_DIR, { recursive: true });
  const packages = parseRegistry();
  const ourDefs = readOurDefinitions();
  const today = new Date().toISOString().slice(0, 10);

  process.stderr.write(`\nCloning ${packages.length} repos into ${CLONE_DIR}...\n`);
  const clonePaths = await cloneAll(packages);

  const results = [];
  let totalEnvVars = 0;
  let totalDefined = 0;
  let totalMissing = 0;
  let sdksWithEnv = 0;

  for (const pkg of packages) {
    const shortName = pkg.name.replace("@secretdef/", "");
    const clonePath = clonePaths.get(pkg.name);
    if (!clonePath) {
      results.push({ name: shortName, repo: pkg.repo, npm: pkg.npm, error: "clone failed", envVars: [] });
      pkg.dateEvaluated = today;
      continue;
    }

    const files = walk(clonePath);
    const allEnvVars = new Map();
    for (const file of files) {
      const found = scanFile(file);
      for (const [envVar, line] of found) {
        if (!allEnvVars.has(envVar)) {
          allEnvVars.set(envVar, { file: relative(clonePath, file), line });
        }
      }
    }

    const ourKeys = ourDefs.get(shortName) || new Set();
    const envVarEntries = [];
    for (const [envVar, loc] of allEnvVars) {
      const defined = ourKeys.has(envVar);
      envVarEntries.push({ envVar, file: loc.file, line: loc.line, defined });
      if (defined) totalDefined++;
      else totalMissing++;
    }

    totalEnvVars += envVarEntries.length;
    const hasEnv = envVarEntries.length > 0;
    if (hasEnv) sdksWithEnv++;

    pkg.hasEnvVars = hasEnv;
    pkg.dateEvaluated = today;

    results.push({ name: shortName, repo: pkg.repo, npm: pkg.npm, envVars: envVarEntries });
  }

  // Write back to registry.yaml
  updateRegistry(packages);
  process.stderr.write(`\nUpdated registry.yaml with dateEvaluated and hasEnvVars\n`);

  // Output
  if (JSON_FLAG) {
    const output = { results, summary: { sdksWithEnv, totalSdks: results.length, totalEnvVars, totalDefined, totalMissing } };
    console.log(JSON.stringify(output, null, 2));
  } else {
    console.log("\n=== SDK Environment Variable Scan ===\n");
    for (const r of results) {
      if (r.error) {
        console.log(`\u26a0\ufe0f  ${r.repo} (npm: ${r.npm})`);
        console.log(`   Error: ${r.error}\n`);
        continue;
      }
      if (r.envVars.length === 0) {
        console.log(`\u274c ${r.repo} (npm: ${r.npm})`);
        console.log(`   No process.env usage found\n`);
      } else {
        console.log(`\u2705 ${r.repo} (npm: ${r.npm})`);
        console.log(`   Found ${r.envVars.length} env vars via process.env:`);
        for (const v of r.envVars) {
          const status = v.defined ? `DEFINED in @secretdef/${r.name}` : `MISSING from @secretdef/${r.name}`;
          const pad = " ".repeat(Math.max(1, 30 - v.envVar.length));
          console.log(`   - ${v.envVar}${pad}\u2192 ${v.file}:${v.line}    [${status}]`);
        }
        console.log();
      }
    }
    console.log("=== Summary ===");
    console.log(`SDKs using process.env: ${sdksWithEnv}/${results.length}`);
    console.log(`Total env vars found: ${totalEnvVars}`);
    console.log(`Already defined in @secretdef: ${totalDefined}`);
    console.log(`Missing from @secretdef: ${totalMissing}`);
  }

  // Cleanup
  if (!KEEP_FLAG) {
    process.stderr.write(`\nCleaning up ${CLONE_DIR}...\n`);
    rmSync(CLONE_DIR, { recursive: true, force: true });
  } else {
    process.stderr.write(`\nKept clones in ${CLONE_DIR}\n`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
