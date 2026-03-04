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
  const resolved: ValidatedSecrets = {};

  for (const { key, spec, registeredBy } of entries) {
    const info = resolveSecret(key, spec, currentEnv, process.env, registeredBy);
    if (info.missing) {
      missing.push(info);
    } else if (info.value !== undefined) {
      resolved[key] = info.value;
    }
  }

  if (missing.length === 0) return resolved;

  if (mode === 'error') {
    printErrorTable(missing, currentEnv);
    process.exit(1);
  } else {
    printWarningTable(missing, currentEnv);
  }

  return resolved;
}

function printErrorTable(missing: ResolvedInfo[], env: string): void {
  const lines: string[] = [];
  lines.push('');
  lines.push(`\u{1F534} Missing ${missing.length} secret(s) [env=${env}]:`);
  lines.push('');

  for (const info of missing) {
    lines.push(`  \u2717 ${info.envVar}`);
    if (info.spec.description) {
      lines.push(`    ${info.spec.description}`);
    }
    if (info.registeredBy) {
      lines.push(`    registered by: ${info.registeredBy}`);
    }
    lines.push('');
  }

  console.error(lines.join('\n'));
}

function printWarningTable(missing: ResolvedInfo[], env: string): void {
  const lines: string[] = [];
  lines.push('');
  lines.push(`\u26A0\uFE0F  Missing ${missing.length} secret(s) [env=${env}]:`);
  lines.push('');

  for (const info of missing) {
    lines.push(`  \u26A0 ${info.envVar}`);
    if (info.spec.description) {
      lines.push(`    ${info.spec.description}`);
    }
    if (info.registeredBy) {
      lines.push(`    registered by: ${info.registeredBy}`);
    }
    lines.push('');
  }

  lines.push('Server will start. These will throw if accessed at runtime.');
  lines.push('');

  console.warn(lines.join('\n'));
}
