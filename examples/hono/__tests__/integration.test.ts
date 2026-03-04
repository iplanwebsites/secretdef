import { describe, it, expect, vi, beforeEach } from 'vitest';

describe('Hono example', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.unstubAllEnvs();
  });

  it('GET / returns status ok', async () => {
    vi.stubEnv('NODE_ENV', 'development');
    const { createApp } = await import('../server.js');
    const app = createApp();
    const res = await app.request('/');
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ status: 'ok' });
  });

  it('GET /secret returns API_KEY value from env', async () => {
    vi.stubEnv('NODE_ENV', 'development');
    vi.stubEnv('API_KEY', 'test-key-from-env');
    const { createApp } = await import('../server.js');
    const app = createApp();
    const res = await app.request('/secret');
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ API_KEY: 'test-key-from-env' });
  });

  it('GET /secret returns dev default when no env var set', async () => {
    vi.stubEnv('NODE_ENV', 'development');
    const { createApp } = await import('../server.js');
    const app = createApp();
    const res = await app.request('/secret');
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ API_KEY: 'dev-key-123' });
  });

  it('validateSecrets warns about DATABASE_URL in development', async () => {
    vi.stubEnv('NODE_ENV', 'development');
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const { createApp } = await import('../server.js');
    createApp();
    expect(warnSpy).toHaveBeenCalled();
    const output = warnSpy.mock.calls.flat().join('\n');
    expect(output).toContain('DATABASE_URL');
    expect(output).not.toContain('API_KEY');
    warnSpy.mockRestore();
  });

  it('useSecret throws SecretNotAvailableError for missing DATABASE_URL', async () => {
    vi.stubEnv('NODE_ENV', 'development');
    const { useSecret, SecretNotAvailableError } = await import('secretdef');
    const { secrets } = await import('../secrets.js');
    expect(() => useSecret('DATABASE_URL', secrets)).toThrow(SecretNotAvailableError);
  });
});
