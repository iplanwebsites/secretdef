import type { SecretSpec, ValidateOptions } from './types.js';
import { getRegistry } from './registry.js';
import { resolveSecret, type ResolvedInfo } from './resolve.js';
import { writeGeneratedJson } from './generated.js';
import { detectEnvSource } from './env-detect.js';

export interface ValidatedSecrets {
  [key: string]: string;
}

/**
 * Validates secrets and returns a resolved key→value map.
 *
 * Accepts an explicit specs map, or falls back to the auto-registry.
 * Pass `{ env: c.env }` in options to read from edge runtime bindings instead of `process.env`.
 *
 * In production: missing required secrets → print error table → process.exit(1)
 * In other envs: missing required secrets → print warning table → continue
 *
 * @example
 * ```ts
 * // Node.js — uses process.env automatically
 * validateSecrets(specs);
 *
 * // Cloudflare Workers — pass env source
 * validateSecrets(specs, { env: c.env });
 * ```
 */
export function validateSecrets(
  secrets?: Record<string, SecretSpec>,
  envOrOptions?: string | ValidateOptions,
  options?: ValidateOptions,
): ValidatedSecrets {
  // Support both old signature (secrets, envString, options) and new (secrets, options)
  let currentEnvName: string | undefined;
  let opts: ValidateOptions | undefined;

  if (typeof envOrOptions === 'string') {
    // Old-style: validateSecrets(specs, "production", { mode: "warn" })
    currentEnvName = envOrOptions;
    opts = options;
  } else if (typeof envOrOptions === 'object') {
    // New-style: validateSecrets(specs, { env: c.env, mode: "error" })
    opts = envOrOptions;
  } else {
    opts = options;
  }

  const envSource = detectEnvSource(opts?.env);
  const currentEnv = currentEnvName ?? envSource['NODE_ENV'] ?? 'development';
  const isProduction = currentEnv === 'production';
  const mode = opts?.mode ?? (isProduction ? 'error' : 'warn');
  const hasProcessExit = typeof process !== 'undefined' && typeof process.exit === 'function';

  // Build the source: explicit map or auto-registry
  const entries: Array<{ key: string; spec: SecretSpec; registeredBy?: string }> = [];

  if (secrets) {
    for (const [key, spec] of Object.entries(secrets)) {
      entries.push({ key, spec });
    }
  } else {
    const registry = getRegistry();
    for (const [key, registered] of registry) {
      entries.push({ key, spec: registered, registeredBy: registered.registeredBy });
    }
  }

  const missing: ResolvedInfo[] = [];
  const invalid: ResolvedInfo[] = [];
  const optionalMissing: ResolvedInfo[] = [];
  const allInfos: ResolvedInfo[] = [];
  const resolved: ValidatedSecrets = {};

  for (const { key, spec, registeredBy } of entries) {
    const info = resolveSecret(key, spec, currentEnv, envSource, registeredBy);
    allInfos.push(info);
    if (info.missing) {
      missing.push(info);
    } else if (info.validationError) {
      invalid.push(info);
    } else if (info.value !== undefined) {
      resolved[key] = info.value;
    } else if (!info.required && info.value === undefined) {
      optionalMissing.push(info);
    }
  }

  // Write generated.json snapshot in non-production environments (Node.js only)
  // Set DISABLE_SECRETDEF_UI=1 to skip writing the snapshot file
  if (!isProduction && hasProcessExit && !envSource['DISABLE_SECRETDEF_UI']) {
    try {
      writeGeneratedJson(entries, allInfos, currentEnv);
    } catch {
      // Silently ignore — generated.json is best-effort
    }
  }

  const problems = [...missing, ...invalid];

  if (problems.length === 0) {
    // Even with no problems, show optional missing in warn mode
    if (mode === 'warn' && optionalMissing.length > 0) {
      printOptionalSummary(optionalMissing);
    }
    return resolved;
  }

  if (mode === 'error') {
    printErrorTable(missing, invalid, currentEnv);
    if (hasProcessExit) {
      process.exit(1);
    } else {
      // Edge runtime — throw instead of process.exit
      const lines = problems.map((p) => {
        const reason = p.missing ? 'missing' : `invalid: ${p.validationError}`;
        return `  ${p.envVar} — ${reason}`;
      });
      throw new Error(
        `secretdef: ${problems.length} secret ${problems.length === 1 ? 'problem' : 'problems'} [env=${currentEnv}]:\n${lines.join('\n')}`,
      );
    }
  } else {
    printWarningTable(missing, invalid, optionalMissing, currentEnv);
  }

  return resolved;
}

function pluralize(count: number, singular: string, plural: string): string {
  return count === 1 ? singular : plural;
}

function formatHeader(missing: ResolvedInfo[], invalid: ResolvedInfo[], env: string, emoji: string): string {
  const total = missing.length + invalid.length;
  const parts: string[] = [];
  if (missing.length > 0) {
    parts.push(`${missing.length} missing`);
  }
  if (invalid.length > 0) {
    parts.push(`${invalid.length} invalid`);
  }
  const breakdown = parts.length > 1 ? ` (${parts.join(', ')})` : '';
  return `${emoji} ${total} secret ${pluralize(total, 'problem', 'problems')} [env=${env}]${breakdown}:`;
}

function formatProblem(info: ResolvedInfo, isMissing: boolean): string[] {
  const marker = isMissing ? '\u{1F511}' : '\u{1F527}';
  const reason = isMissing ? 'missing' : `invalid: ${info.validationError}`;
  const lines: string[] = [];
  lines.push(`  ${marker} ${info.envVar} \u2014 ${reason}`);
  if (info.spec.description) {
    lines.push(`     ${info.spec.description}`);
  }
  if (info.spec.dashboard) {
    lines.push(`     dashboard: ${info.spec.dashboard}`);
  }
  if (info.spec.example) {
    lines.push(`     example: ${info.spec.example}`);
  }
  if (info.registeredBy) {
    lines.push(`     defined in: ${info.registeredBy}`);
  }
  lines.push('');
  return lines;
}

function formatProblems(missing: ResolvedInfo[], invalid: ResolvedInfo[]): string[] {
  const all = [
    ...missing.map((info) => ({ info, isMissing: true })),
    ...invalid.map((info) => ({ info, isMissing: false })),
  ];

  // Group by spec.group if any entries have one
  const hasGroups = all.some(({ info }) => info.spec.group);
  if (!hasGroups) {
    const lines: string[] = [];
    for (const { info, isMissing } of all) {
      lines.push(...formatProblem(info, isMissing));
    }
    return lines;
  }

  // Collect by group (ungrouped last)
  const groups = new Map<string, typeof all>();
  const ungrouped: typeof all = [];
  for (const entry of all) {
    const group = entry.info.spec.group;
    if (group) {
      if (!groups.has(group)) groups.set(group, []);
      groups.get(group)!.push(entry);
    } else {
      ungrouped.push(entry);
    }
  }

  const lines: string[] = [];
  for (const [group, entries] of groups) {
    lines.push(`  [${group}]`);
    for (const { info, isMissing } of entries) {
      lines.push(...formatProblem(info, isMissing));
    }
  }
  if (ungrouped.length > 0) {
    if (groups.size > 0) lines.push('  [other]');
    for (const { info, isMissing } of ungrouped) {
      lines.push(...formatProblem(info, isMissing));
    }
  }

  return lines;
}

function formatEnvBlock(missing: ResolvedInfo[], invalid: ResolvedInfo[]): string[] {
  if (missing.length === 0 && invalid.length === 0) return [];

  const lines: string[] = [];
  lines.push('  Add to your .env file:');
  lines.push('');
  for (const info of missing) {
    const example = info.spec.example ? info.spec.example : '';
    lines.push(`    ${info.envVar}=${example}`);
  }
  for (const info of invalid) {
    lines.push(`    ${info.envVar}=           # current value is invalid`);
  }
  lines.push('');
  return lines;
}

function formatOptionalSection(optionalMissing: ResolvedInfo[]): string[] {
  if (optionalMissing.length === 0) return [];
  const names = optionalMissing.map((info) => info.envVar).join(', ');
  const lines: string[] = [];
  lines.push(`  \u{2139}\u{FE0F}  ${optionalMissing.length} optional ${pluralize(optionalMissing.length, 'secret', 'secrets')} not configured: ${names}`);
  lines.push('');
  return lines;
}

function printOptionalSummary(optionalMissing: ResolvedInfo[]): void {
  if (optionalMissing.length === 0) return;
  const lines: string[] = [''];
  lines.push(...formatOptionalSection(optionalMissing));
  console.warn(lines.join('\n'));
}

function printErrorTable(missing: ResolvedInfo[], invalid: ResolvedInfo[], env: string): void {
  const lines: string[] = [];
  lines.push('');
  lines.push(formatHeader(missing, invalid, env, '\u274C'));
  lines.push('');
  lines.push(...formatProblems(missing, invalid));
  lines.push(...formatEnvBlock(missing, invalid));
  console.error(lines.join('\n'));
}

function printWarningTable(missing: ResolvedInfo[], invalid: ResolvedInfo[], optionalMissing: ResolvedInfo[], env: string): void {
  const lines: string[] = [];
  lines.push('');
  lines.push(formatHeader(missing, invalid, env, '\u26A0\uFE0F'));
  lines.push('');
  lines.push(...formatProblems(missing, invalid));
  lines.push('  Server will start, but missing secrets will throw if accessed at runtime.');
  lines.push('');
  lines.push(...formatOptionalSection(optionalMissing));
  lines.push(...formatEnvBlock(missing, invalid));
  console.warn(lines.join('\n'));
}
