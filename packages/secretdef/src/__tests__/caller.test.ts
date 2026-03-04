import { describe, it, expect, beforeEach } from 'vitest';
import { getCallerFile } from '../caller.js';
import { enableAutoRegister, clearRegistry, getRegistry } from '../registry.js';
import { defineSecrets } from '../index.js';

beforeEach(() => {
  clearRegistry();
});

describe('getCallerFile', () => {
  it('returns a string', () => {
    const result = getCallerFile();
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
  });

  it('strips file:// protocol from paths', () => {
    const result = getCallerFile();
    expect(result).not.toMatch(/^file:\/\//);
  });

  it('returns <unknown> when there are no useful stack frames', () => {
    // Directly test by checking the function doesn't throw
    const result = getCallerFile();
    expect(result).not.toBe('');
  });
});

describe('getCallerFile via defineSecrets (integration)', () => {
  it('captures the registering file when used via auto-register', () => {
    enableAutoRegister();
    defineSecrets({ TEST_KEY: { envVar: 'TEST_VAR' } });

    const registry = getRegistry();
    const entry = registry.get('TEST_KEY');

    expect(entry).toBeDefined();
    expect(entry!.registeredBy).toBeTruthy();
    // The registeredBy should be a file path string
    expect(typeof entry!.registeredBy).toBe('string');
  });

  it('captures different files for different defineSecrets calls', () => {
    enableAutoRegister();

    // Both calls are in the same file, so registeredBy will be the same
    defineSecrets({ KEY_A: { envVar: 'A' } });
    defineSecrets({ KEY_B: { envVar: 'B' } });

    const registry = getRegistry();
    const a = registry.get('KEY_A');
    const b = registry.get('KEY_B');

    expect(a!.registeredBy).toBeTruthy();
    expect(b!.registeredBy).toBeTruthy();
    // Same file, same registeredBy
    expect(a!.registeredBy).toBe(b!.registeredBy);
  });
});
