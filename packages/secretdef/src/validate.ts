import type { SecretSpec, ValidateOptions } from './types.js';
import { getRegistry } from './registry.js';
import { resolveSecret, type ResolvedInfo } from './resolve.js';

export interface ValidatedSecrets {
  [key: string]: string;
}

/**
 * Validates secrets and returns a resolved key→value map.
 *
 * Accepts an explicit specs map, or falls back to the auto-registry.
 * In production: missing required secrets → print error table → process.exit(1)
 * In other envs: missing required secrets → print warning table → continue
 */
export function validateSecrets(
  secrets?: Record<string, SecretSpec>,
  env?: string,
  options?: ValidateOptions,
): ValidatedSecrets {
  const currentEnv = env ?? process.env.NODE_ENV ?? 'development';
  const isProduction = currentEnv === 'production';
  const mode = options?.mode ?? (isProduction ? 'error' : 'warn');

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
  const resolved: ValidatedSecrets = {};

  for (const { key, spec, registeredBy } of entries) {
    const info = resolveSecret(key, spec, currentEnv, process.env, registeredBy);
    if (info.missing) {
      missing.push(info);
    } else if (info.validationError) {
      invalid.push(info);
    } else if (info.value !== undefined) {
      resolved[key] = info.value;
    }
  }

  const problems = [...missing, ...invalid];
  if (problems.length === 0) return resolved;

  if (mode === 'error') {
    printErrorTable(missing, invalid, currentEnv);
    process.exit(1);
  } else {
    printWarningTable(missing, invalid, currentEnv);
  }

  return resolved;
}

function formatProblem(info: ResolvedInfo, marker: string, reason: string): string[] {
  const lines: string[] = [];
  lines.push(`  ${marker} ${info.envVar} — ${reason}`);
  if (info.spec.description) {
    lines.push(`    ${info.spec.description}`);
  }
  if (info.spec.example) {
    lines.push(`    example: ${info.spec.example}`);
  }
  if (info.registeredBy) {
    lines.push(`    registered by: ${info.registeredBy}`);
  }
  lines.push('');
  return lines;
}

function formatProblems(missing: ResolvedInfo[], invalid: ResolvedInfo[], marker: string): string[] {
  const all = [
    ...missing.map((info) => ({ info, reason: 'missing' })),
    ...invalid.map((info) => ({ info, reason: `invalid: ${info.validationError}` })),
  ];

  // Group by spec.group if any entries have one
  const hasGroups = all.some(({ info }) => info.spec.group);
  if (!hasGroups) {
    const lines: string[] = [];
    for (const { info, reason } of all) {
      lines.push(...formatProblem(info, marker, reason));
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
    for (const { info, reason } of entries) {
      lines.push(...formatProblem(info, marker, reason));
    }
  }
  if (ungrouped.length > 0) {
    if (groups.size > 0) lines.push('  [other]');
    for (const { info, reason } of ungrouped) {
      lines.push(...formatProblem(info, marker, reason));
    }
  }

  return lines;
}

function printErrorTable(missing: ResolvedInfo[], invalid: ResolvedInfo[], env: string): void {
  const total = missing.length + invalid.length;
  const lines: string[] = [];
  lines.push('');
  lines.push(`\u{1F534} ${total} secret problem(s) [env=${env}]:`);
  lines.push('');
  lines.push(...formatProblems(missing, invalid, '\u2717'));
  console.error(lines.join('\n'));
}

function printWarningTable(missing: ResolvedInfo[], invalid: ResolvedInfo[], env: string): void {
  const total = missing.length + invalid.length;
  const lines: string[] = [];
  lines.push('');
  lines.push(`\u26A0\uFE0F  ${total} secret problem(s) [env=${env}]:`);
  lines.push('');
  lines.push(...formatProblems(missing, invalid, '\u26A0'));
  lines.push('Server will start. These will throw if accessed at runtime.');
  lines.push('');
  console.warn(lines.join('\n'));
}
