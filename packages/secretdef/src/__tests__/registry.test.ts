import { describe, it, expect, beforeEach } from 'vitest';
import { enableAutoRegister, getRegistry, clearRegistry } from '../registry.js';
import { defineSecrets } from '../index.js';

beforeEach(() => {
  clearRegistry();
});

describe('defineSecrets', () => {
  it('always registers specs in the global registry', () => {
    const specs = defineSecrets({
      MY_KEY: { description: 'test' },
    });

    expect(specs).toEqual({ MY_KEY: { description: 'test' } });
    expect(getRegistry().size).toBe(1);
    expect(getRegistry().get('MY_KEY')?.description).toBe('test');
    expect(getRegistry().get('MY_KEY')?.registeredBy).toBeTruthy();
  });

  it('enableAutoRegister is a backward-compatible no-op', () => {
    enableAutoRegister();

    defineSecrets({
      MY_KEY: { description: 'test' },
    });

    const registry = getRegistry();
    expect(registry.size).toBe(1);
    expect(registry.get('MY_KEY')?.description).toBe('test');
  });

  it('throws on duplicate keys', () => {
    defineSecrets({ DUPE: {} });

    expect(() =>
      defineSecrets({ DUPE: {} })
    ).toThrowError(/Duplicate secret "DUPE"/);
  });
});

describe('clearRegistry', () => {
  it('removes all registered secrets', () => {
    defineSecrets({ A: {} });
    expect(getRegistry().size).toBe(1);

    clearRegistry();
    expect(getRegistry().size).toBe(0);

    // Can re-register after clear
    defineSecrets({ B: {} });
    expect(getRegistry().size).toBe(1);
  });
});
