import { describe, it, expect } from 'vitest';
import { resolveSecret } from '../resolve.js';
import type { SecretSpec } from '../types.js';

describe('resolveSecret edge cases', () => {
  it('defaults required to true when not specified', () => {
    const spec: SecretSpec = {};
    const info = resolveSecret('MY_VAR', spec, 'production', {});
    expect(info.required).toBe(true);
    expect(info.missing).toBe(true);
  });

  it('required: false means missing is false even when absent', () => {
    const spec: SecretSpec = { required: false };
    const info = resolveSecret('MY_VAR', spec, 'production', {});
    expect(info.required).toBe(false);
    expect(info.missing).toBe(false);
    expect(info.value).toBeUndefined();
  });

  it('passes through registeredBy', () => {
    const spec: SecretSpec = {};
    const info = resolveSecret('MY_VAR', spec, 'production', { MY_VAR: 'val' }, 'src/secrets.ts');
    expect(info.registeredBy).toBe('src/secrets.ts');
  });

  it('registeredBy is undefined when not passed', () => {
    const spec: SecretSpec = {};
    const info = resolveSecret('MY_VAR', spec, 'production', { MY_VAR: 'val' });
    expect(info.registeredBy).toBeUndefined();
  });

  it('env var value takes precedence over default in environments', () => {
    const spec: SecretSpec = {
      environments: {
        dev: { default: 'fallback' },
      },
    };
    const info = resolveSecret('MY_VAR', spec, 'dev', { MY_VAR: 'actual' });
    expect(info.value).toBe('actual');
  });

  it('uses default from environments when env var is absent', () => {
    const spec: SecretSpec = {
      environments: {
        dev: { default: 'fallback' },
      },
    };
    const info = resolveSecret('MY_VAR', spec, 'dev', {});
    expect(info.value).toBe('fallback');
    expect(info.defaultValue).toBe('fallback');
  });

  it('handles empty environments object', () => {
    const spec: SecretSpec = { environments: {} };
    const info = resolveSecret('MY_VAR', spec, 'production', { MY_VAR: 'val' });
    expect(info.value).toBe('val');
  });

  it('handles undefined environments entry for current env', () => {
    const spec: SecretSpec = {
      environments: {
        staging: { envVar: 'STAGING_VAR' },
      },
    };
    // production has no override
    const info = resolveSecret('MY_VAR', spec, 'production', { MY_VAR: 'val' });
    expect(info.envVar).toBe('MY_VAR');
    expect(info.value).toBe('val');
  });

  it('override can change both envVar and required', () => {
    const spec: SecretSpec = {
      environments: {
        test: { envVar: 'TEST_VAR', required: false },
      },
    };
    const info = resolveSecret('PROD_VAR', spec, 'test', {});
    expect(info.envVar).toBe('TEST_VAR');
    expect(info.required).toBe(false);
    expect(info.missing).toBe(false);
  });

  it('returns spec and key in resolved info', () => {
    const spec: SecretSpec = { description: 'test' };
    const info = resolveSecret('MY_VAR', spec, 'dev', { MY_VAR: 'v' });
    expect(info.key).toBe('MY_VAR');
    expect(info.spec).toBe(spec);
  });

  it('uses process.env by default when processEnv not passed', () => {
    const orig = process.env.__RESOLVE_TEST_VAR__;
    process.env.__RESOLVE_TEST_VAR__ = 'from-process-env';

    const spec: SecretSpec = {};
    const info = resolveSecret('__RESOLVE_TEST_VAR__', spec, 'production');
    expect(info.value).toBe('from-process-env');

    if (orig === undefined) delete process.env.__RESOLVE_TEST_VAR__;
    else process.env.__RESOLVE_TEST_VAR__ = orig;
  });
});
