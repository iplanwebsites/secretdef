import { describe, it, expect, vi, beforeEach } from 'vitest';

describe('Next.js example', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.unstubAllEnvs();
  });

  it('instrumentation register() calls validateSecrets', async () => {
    vi.stubEnv('NODE_ENV', 'development');
    vi.stubEnv('DATABASE_URL', 'postgres://localhost/test');
    const { register } = await import('../instrumentation.js');
    expect(() => register()).not.toThrow();
  });

  it('validateSecrets warns about DATABASE_URL in development', async () => {
    vi.stubEnv('NODE_ENV', 'development');
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const { register } = await import('../instrumentation.js');
    register();
    expect(warnSpy).toHaveBeenCalled();
    const output = warnSpy.mock.calls.flat().join('\n');
    expect(output).toContain('DATABASE_URL');
    expect(output).not.toContain('API_KEY');
    warnSpy.mockRestore();
  });

  it('route handler returns API_KEY value', async () => {
    vi.stubEnv('NODE_ENV', 'development');
    vi.stubEnv('API_KEY', 'test-key-from-env');
    const { GET } = await import('../app/api/secret/route.js');
    const response = GET();
    expect(response.status).toBe(200);
    const body = await response.json();
    expect(body).toEqual({ API_KEY: 'test-key-from-env' });
  });

  it('route handler returns dev default when no env var set', async () => {
    vi.stubEnv('NODE_ENV', 'development');
    const { GET } = await import('../app/api/secret/route.js');
    const response = GET();
    expect(response.status).toBe(200);
    const body = await response.json();
    expect(body).toEqual({ API_KEY: 'dev-key-123' });
  });

  it('useSecret throws SecretNotAvailableError for missing DATABASE_URL', async () => {
    vi.stubEnv('NODE_ENV', 'development');
    const { useSecret, SecretNotAvailableError } = await import('secretdef');
    const { secrets } = await import('../secrets.js');
    expect(() => useSecret('DATABASE_URL', secrets)).toThrow(SecretNotAvailableError);
  });
});
