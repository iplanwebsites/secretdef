import type { SecretSpec, RegisteredSecret } from './types.js';
import { getCallerFile } from './caller.js';

let autoRegister = false;
const registry = new Map<string, RegisteredSecret>();

export function enableAutoRegister(): void {
  autoRegister = true;
}

export function isAutoRegisterEnabled(): boolean {
  return autoRegister;
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
  if (!autoRegister) return;
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
  autoRegister = false;
}
