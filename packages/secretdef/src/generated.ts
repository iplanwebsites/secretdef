import { writeFileSync, mkdirSync, readdirSync, existsSync } from 'node:fs';
import { join, basename, relative, dirname } from 'node:path';
import { createHash } from 'node:crypto';
import type { SecretSpec } from './types.js';
import type { ResolvedInfo } from './resolve.js';

export interface GeneratedSecret {
  description?: string;
  dashboard?: string;
  required: boolean;
  group?: string;
  example?: string;
  devDefault?: string;
  choices?: readonly string[];
  environments?: SecretSpec['environments'];
  registeredBy?: string;
  envVar: string;
  hasValue: boolean;
  status: 'ok' | 'missing' | 'invalid';
  validationError?: string;
  /** Name of built-in validator, if any */
  validate?: string;
}

export interface GeneratedJson {
  version: 1;
  generatedAt: string;
  environment: string;
  cwd: string;
  /** The entry file (process.argv[1]) that produced this snapshot */
  entryFile: string;
  /** Short label derived from the entry file for display in tabs */
  label: string;
  secrets: Record<string, GeneratedSecret>;
}

/**
 * Walks up from `startDir` looking for a directory containing `package.json`.
 * Returns the first match, or falls back to `process.cwd()`.
 *
 * In monorepos this ensures each package writes `.secretdef/` next to its own
 * `package.json` instead of at the monorepo root (which is typically `cwd`).
 */
export function findProjectRoot(startDir: string): string {
  let dir = startDir;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (existsSync(join(dir, 'package.json'))) {
      return dir;
    }
    const parent = dirname(dir);
    if (parent === dir) break; // reached filesystem root
    dir = parent;
  }
  return process.cwd();
}

/**
 * Derives a short, stable filename suffix from the entry file path.
 * Uses a short hash to avoid conflicts while keeping filenames readable.
 */
function entryFileSlug(entryFile: string, projectRoot: string): string {
  const rel = relative(projectRoot, entryFile);
  const hash = createHash('sha256').update(rel).digest('hex').slice(0, 8);
  const name = basename(entryFile).replace(/\.[^.]+$/, '').replace(/[^a-zA-Z0-9_-]/g, '_');
  return `${name}-${hash}`;
}

/**
 * Derives a short human-readable label for the entry file.
 */
function entryFileLabel(entryFile: string): string {
  return basename(entryFile).replace(/\.[^.]+$/, '');
}

/**
 * Writes `.secretdef/generated-<slug>.json` with a snapshot of all resolved secrets.
 * Each entry file (process.argv[1]) gets its own file, enabling tab-based viewing in the UI.
 * Only called in non-production environments. Errors are silently caught by the caller.
 */
export function writeGeneratedJson(
  entries: Array<{ key: string; spec: SecretSpec; registeredBy?: string }>,
  resolvedInfos: ResolvedInfo[],
  currentEnv: string,
): void {
  const infoMap = new Map<string, ResolvedInfo>();
  for (const info of resolvedInfos) {
    infoMap.set(info.key, info);
  }

  const secrets: Record<string, GeneratedSecret> = {};

  for (const { key, spec, registeredBy } of entries) {
    const info = infoMap.get(key);

    let status: GeneratedSecret['status'] = 'ok';
    if (info?.missing) status = 'missing';
    else if (info?.validationError) status = 'invalid';

    // Extract validator name (string for builtins, skip functions)
    let validate: string | undefined;
    if (typeof spec.validate === 'string') {
      validate = spec.validate;
    }

    secrets[key] = {
      description: spec.description,
      dashboard: spec.dashboard,
      required: info?.required ?? spec.required ?? true,
      group: spec.group,
      example: spec.example,
      devDefault: spec.devDefault,
      choices: spec.choices,
      environments: spec.environments,
      registeredBy,
      envVar: info?.envVar ?? key,
      hasValue: info?.value !== undefined,
      status,
      validationError: info?.validationError,
      validate,
    };
  }

  const entryFile = process.argv[1] || 'unknown';
  const projectRoot = findProjectRoot(dirname(entryFile !== 'unknown' ? entryFile : process.cwd()));

  const data: GeneratedJson = {
    version: 1,
    generatedAt: new Date().toISOString(),
    environment: currentEnv,
    cwd: projectRoot,
    entryFile,
    label: entryFileLabel(entryFile),
    secrets,
  };

  const dir = join(projectRoot, '.secretdef');
  mkdirSync(dir, { recursive: true });
  const slug = entryFileSlug(entryFile, projectRoot);
  writeFileSync(join(dir, `generated-${slug}.json`), JSON.stringify(data, null, 2) + '\n');
}

/**
 * Lists all generated JSON files in the .secretdef directory.
 * Used by the UI server to discover all available snapshots.
 */
export function listGeneratedFiles(cwd: string): string[] {
  const dir = join(cwd, '.secretdef');
  try {
    return readdirSync(dir)
      .filter((f) => f.startsWith('generated-') && f.endsWith('.json'))
      .map((f) => join(dir, f));
  } catch {
    return [];
  }
}
