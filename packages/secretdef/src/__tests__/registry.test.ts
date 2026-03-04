import { describe, it, expect, beforeEach } from 'vitest';
import { enableAutoRegister, getRegistry, clearRegistry } from '../registry.js';
import { defineSecrets } from '../index.js';

beforeEach(() => {
  clearRegistry();
});

describe('defineSecrets', () => {
  it('returns pure data without auto-register', () => {
    const specs = defineSecrets({
      MY_KEY: { envVar: 'MY_ENV_VAR' },
    });

    expect(specs).toEqual({ MY_KEY: { envVar: 'MY_ENV_VAR' } });
    expect(getRegistry().size).toBe(0);
  });

  it('registers specs when auto-register is enabled', () => {
    enableAutoRegister();

    defineSecrets({
      MY_KEY: { envVar: 'MY_ENV_VAR', description: 'test' },
    });

    const registry = getRegistry();
    expect(registry.size).toBe(1);
    expect(registry.get('MY_KEY')?.envVar).toBe('MY_ENV_VAR');
    expect(registry.get('MY_KEY')?.registeredBy).toBeTruthy();
  });

  it('throws on duplicate keys when auto-register is enabled', () => {
    enableAutoRegister();

    defineSecrets({ DUPE: { envVar: 'DUPE_VAR' } });

    expect(() =>
      defineSecrets({ DUPE: { envVar: 'DUPE_VAR' } })
    ).toThrowError(/Duplicate secret "DUPE"/);
  });

  it('allows same key in separate calls without auto-register (pure data)', () => {
    const a = defineSecrets({ KEY: { envVar: 'A' } });
    const b = defineSecrets({ KEY: { envVar: 'B' } });

    expect(a.KEY.envVar).toBe('A');
    expect(b.KEY.envVar).toBe('B');
    expect(getRegistry().size).toBe(0);
  });
});

describe('clearRegistry', () => {
  it('removes all registered secrets and resets auto-register', () => {
    enableAutoRegister();
    defineSecrets({ A: { envVar: 'A' } });
    expect(getRegistry().size).toBe(1);

    clearRegistry();
    expect(getRegistry().size).toBe(0);

    // auto-register should be off after clear
    defineSecrets({ B: { envVar: 'B' } });
    expect(getRegistry().size).toBe(0);
  });
});
