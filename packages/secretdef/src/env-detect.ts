/**
 * Detects the env source to use for reading secrets.
 *
 * Priority:
 * 1. Explicit `env` parameter (e.g. `c.env` from Cloudflare Workers / Hono)
 * 2. `process.env` if available (Node.js, Bun, etc.)
 * 3. Empty object (edge runtime with no env passed — secrets will be "missing")
 *
 * When a custom env source is passed, non-string values (D1Database, KVNamespace, etc.)
 * are automatically filtered out.
 */
export function detectEnvSource(
  customEnv?: Record<string, unknown>,
): Record<string, string | undefined> {
  if (customEnv) {
    return toStringRecord(customEnv);
  }

  // Auto-detect process.env
  if (typeof process !== 'undefined' && process?.env) {
    return process.env;
  }

  // Edge runtime with no explicit env — return empty
  return {};
}

/**
 * Converts an env bindings object to a Record<string, string | undefined>.
 * Extracts only string values, skipping non-string bindings (D1Database, KVNamespace, etc).
 */
function toStringRecord(env: Record<string, unknown>): Record<string, string | undefined> {
  const result: Record<string, string | undefined> = {};
  for (const [key, value] of Object.entries(env)) {
    if (typeof value === 'string') {
      result[key] = value;
    }
  }
  return result;
}
