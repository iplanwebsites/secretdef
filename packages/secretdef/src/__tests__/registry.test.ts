import { describe, it, expect, beforeEach } from 'vitest';
import { enableAutoRegister, getRegistry, clearRegistry } from '../registry.js';
import { defineSecrets } from '../index.js';

beforeEach(() => {
  clearRegistry();
});

describe('defineSecrets', () => {
  it('returns pure data without auto-register', () => {
    const specs = defineSecrets({
      MY_KEY: { description: 'test' },
    });

    expect(specs).toEqual({ MY_KEY: { description: 'test' } });
    expect(getRegistry().size).toBe(0);
  });

  it('registers specs when auto-register is enabled', () => {
    enableAutoRegister();

    defineSecrets({
      MY_KEY: { description: 'test' },
    });

    const registry = getRegistry();
    expect(registry.size).toBe(1);
    expect(registry.get('MY_KEY')?.description).toBe('test');
    expect(registry.get('MY_KEY')?.registeredBy).toBeTruthy();
  });

  it('throws on duplicate keys when auto-register is enabled', () => {
    enableAutoRegister();

    defineSecrets({ DUPE: {} });

    expect(() =>
      defineSecrets({ DUPE: {} })
    ).toThrowError(/Duplicate secret "DUPE"/);
  });

  it('allows same key in separate calls without auto-register (pure data)', () => {
    const a = defineSecrets({ KEY: { description: 'a' } });
    const b = defineSecrets({ KEY: { description: 'b' } });

    expect(a.KEY.description).toBe('a');
    expect(b.KEY.description).toBe('b');
    expect(getRegistry().size).toBe(0);
  });
});

describe('clearRegistry', () => {
  it('removes all registered secrets and resets auto-register', () => {
    enableAutoRegister();
    defineSecrets({ A: {} });
    expect(getRegistry().size).toBe(1);

    clearRegistry();
    expect(getRegistry().size).toBe(0);

    // auto-register should be off after clear
    defineSecrets({ B: {} });
    expect(getRegistry().size).toBe(0);
  });
});
