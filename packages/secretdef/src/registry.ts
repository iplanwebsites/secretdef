import type { SecretSpec, RegisteredSecret } from './types.js';
import { getCallerFile } from './caller.js';

const registry = new Map<string, RegisteredSecret>();

/**
 * @deprecated No longer needed — `defineSecrets()` always registers globally now.
 * Kept for backward compatibility; calling it is a harmless no-op.
 */
export function enableAutoRegister(): void {
  // no-op — registration is always on
}

export function register(key: string, spec: SecretSpec, caller: string): void {
  const existing = registry.get(key);
  if (existing) {
    throw new Error(
      `Duplicate secret "${key}"\n` +
        `  First: ${existing.registeredBy}\n` +
        `  Conflict: ${caller}`
    );
  }
  registry.set(key, { ...spec, registeredBy: caller });
}

export function autoRegisterSpecs(specs: Record<string, SecretSpec>): void {
  const caller = getCallerFile();
  for (const [key, spec] of Object.entries(specs)) {
    register(key, spec, caller);
  }
}

export function getRegistry(): ReadonlyMap<string, RegisteredSecret> {
  return registry;
}

export function clearRegistry(): void {
  registry.clear();
}
