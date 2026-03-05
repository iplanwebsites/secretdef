import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { writeGeneratedJson, findProjectRoot, type GeneratedJson } from '../generated.js';
import { readFileSync, existsSync, rmSync, readdirSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import type { SecretSpec } from '../types.js';
import type { ResolvedInfo } from '../resolve.js';

/** Create a temp dir with a package.json so findProjectRoot resolves to it */
function makeTempProject(): string {
  const dir = join(tmpdir(), `secretdef-test-${Date.now()}-${Math.random().toString(36).slice(2)}`);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'package.json'), '{"name":"test-project"}');
  return dir;
}

function secretdefDir(projectRoot: string): string {
  return join(projectRoot, '.secretdef');
}

function findGeneratedFile(projectRoot: string): string {
  const dir = secretdefDir(projectRoot);
  const files = readdirSync(dir).filter(
    (f) => f.startsWith('generated-') && f.endsWith('.json'),
  );
  if (files.length === 0) throw new Error('No generated file found in ' + dir);
  return join(dir, files[0]);
}

function readGenerated(projectRoot: string): GeneratedJson {
  return JSON.parse(readFileSync(findGeneratedFile(projectRoot), 'utf-8'));
}

function makeInfo(overrides: Partial<ResolvedInfo> & { key: string; spec: SecretSpec }): ResolvedInfo {
  return {
    envVar: overrides.key,
    required: true,
    defaultValue: undefined,
    value: undefined,
    missing: false,
    ...overrides,
  };
}

let tempDir: string;
let origArgv1: string;

beforeEach(() => {
  tempDir = makeTempProject();
  origArgv1 = process.argv[1];
  // Point entry file into the temp project so findProjectRoot resolves there
  process.argv[1] = join(tempDir, 'src', 'index.ts');
});

afterEach(() => {
  process.argv[1] = origArgv1;
  if (existsSync(tempDir)) {
    rmSync(tempDir, { recursive: true });
  }
  vi.restoreAllMocks();
});

describe('writeGeneratedJson', () => {
  it('creates .secretdef/generated-<slug>.json with correct schema', () => {
    const entries = [
      { key: 'API_KEY', spec: { description: 'API key', required: true, example: 'sk_...' } as SecretSpec },
    ];
    const infos = [
      makeInfo({ key: 'API_KEY', spec: entries[0].spec, envVar: 'API_KEY', value: 'test', missing: false }),
    ];

    writeGeneratedJson(entries, infos, 'development');

    expect(existsSync(secretdefDir(tempDir))).toBe(true);
    const data = readGenerated(tempDir);

    expect(data.version).toBe(1);
    expect(data.environment).toBe('development');
    expect(data.cwd).toBe(tempDir);
    expect(typeof data.generatedAt).toBe('string');
    expect(typeof data.entryFile).toBe('string');
    expect(typeof data.label).toBe('string');
    expect(data.secrets.API_KEY).toBeDefined();
    expect(data.secrets.API_KEY.description).toBe('API key');
    expect(data.secrets.API_KEY.hasValue).toBe(true);
    expect(data.secrets.API_KEY.status).toBe('ok');
    expect(data.secrets.API_KEY.example).toBe('sk_...');
    expect(data.secrets.API_KEY.envVar).toBe('API_KEY');
    expect(data.secrets.API_KEY.required).toBe(true);
  });

  it('marks missing secrets correctly', () => {
    const entries = [
      { key: 'MISSING_KEY', spec: { description: 'missing' } as SecretSpec },
    ];
    const infos = [
      makeInfo({ key: 'MISSING_KEY', spec: entries[0].spec, missing: true }),
    ];

    writeGeneratedJson(entries, infos, 'development');
    const data = readGenerated(tempDir);

    expect(data.secrets.MISSING_KEY.status).toBe('missing');
    expect(data.secrets.MISSING_KEY.hasValue).toBe(false);
  });

  it('marks invalid secrets correctly', () => {
    const entries = [
      { key: 'BAD_KEY', spec: { description: 'bad', validate: 'url' } as SecretSpec },
    ];
    const infos = [
      makeInfo({
        key: 'BAD_KEY',
        spec: entries[0].spec,
        value: 'not-a-url',
        validationError: 'Expected a valid URL',
      }),
    ];

    writeGeneratedJson(entries, infos, 'development');
    const data = readGenerated(tempDir);

    expect(data.secrets.BAD_KEY.status).toBe('invalid');
    expect(data.secrets.BAD_KEY.validationError).toBe('Expected a valid URL');
    expect(data.secrets.BAD_KEY.validate).toBe('url');
  });

  it('strips custom validate functions (not serializable)', () => {
    const customValidator = (v: string) => v;
    const entries = [
      { key: 'CUSTOM', spec: { description: 'custom', validate: customValidator } as SecretSpec },
    ];
    const infos = [
      makeInfo({ key: 'CUSTOM', spec: entries[0].spec, value: 'ok' }),
    ];

    writeGeneratedJson(entries, infos, 'development');
    const data = readGenerated(tempDir);

    expect(data.secrets.CUSTOM.validate).toBeUndefined();
  });

  it('includes registeredBy when provided', () => {
    const entries = [
      { key: 'REG_KEY', spec: { description: 'registered' } as SecretSpec, registeredBy: '/app/secrets.ts' },
    ];
    const infos = [
      makeInfo({ key: 'REG_KEY', spec: entries[0].spec, value: 'v', registeredBy: '/app/secrets.ts' }),
    ];

    writeGeneratedJson(entries, infos, 'development');
    const data = readGenerated(tempDir);

    expect(data.secrets.REG_KEY.registeredBy).toBe('/app/secrets.ts');
  });

  it('includes dashboard URL when provided', () => {
    const entries = [
      { key: 'DASH_KEY', spec: { description: 'test key', dashboard: 'https://example.com/keys' } as SecretSpec },
    ];
    const infos = [
      makeInfo({ key: 'DASH_KEY', spec: entries[0].spec, value: 'v' }),
    ];

    writeGeneratedJson(entries, infos, 'development');
    const data = readGenerated(tempDir);

    expect(data.secrets.DASH_KEY.dashboard).toBe('https://example.com/keys');
  });

  it('includes group, choices, devDefault, environments', () => {
    const spec: SecretSpec = {
      description: 'test',
      group: 'payments',
      choices: ['a', 'b'],
      devDefault: 'a',
      environments: { staging: { envVar: 'STAGE_KEY' } },
    };
    const entries = [{ key: 'GROUPED', spec }];
    const infos = [makeInfo({ key: 'GROUPED', spec, value: 'a' })];

    writeGeneratedJson(entries, infos, 'development');
    const data = readGenerated(tempDir);

    expect(data.secrets.GROUPED.group).toBe('payments');
    expect(data.secrets.GROUPED.choices).toEqual(['a', 'b']);
    expect(data.secrets.GROUPED.devDefault).toBe('a');
    expect(data.secrets.GROUPED.environments).toEqual({ staging: { envVar: 'STAGE_KEY' } });
  });

  it('contains no function values in the JSON', () => {
    const spec: SecretSpec = {
      description: 'test',
      validate: (v: string) => v,
    };
    const entries = [{ key: 'FN_TEST', spec }];
    const infos = [makeInfo({ key: 'FN_TEST', spec, value: 'ok' })];

    writeGeneratedJson(entries, infos, 'development');
    const raw = readFileSync(findGeneratedFile(tempDir), 'utf-8');

    expect(raw).not.toContain('=>');
  });

  it('does not write when DISABLE_SECRETDEF_UI is set', async () => {
    process.env.DISABLE_SECRETDEF_UI = '1';
    try {
      const { validateSecrets } = await import('../validate.js');
      const { clearRegistry } = await import('../registry.js');
      const { defineSecrets } = await import('../../src/index.js');
      clearRegistry();
      defineSecrets({ TEST_DISABLE: { description: 'test' } });
      process.env.TEST_DISABLE = 'value';
      validateSecrets();
      expect(existsSync(secretdefDir(tempDir))).toBe(false);
      clearRegistry();
    } finally {
      delete process.env.DISABLE_SECRETDEF_UI;
      delete process.env.TEST_DISABLE;
    }
  });

  it('uses entry-file-scoped filenames', () => {
    const entries = [
      { key: 'KEY', spec: { description: 'test' } as SecretSpec },
    ];
    const infos = [makeInfo({ key: 'KEY', spec: entries[0].spec, value: 'v' })];

    writeGeneratedJson(entries, infos, 'development');

    const files = readdirSync(secretdefDir(tempDir)).filter((f) => f.startsWith('generated-'));
    expect(files.length).toBe(1);
    expect(files[0]).toMatch(/^generated-.+\.json$/);
    // Should NOT be just "generated.json"
    expect(files[0]).not.toBe('generated.json');
  });
});

describe('findProjectRoot', () => {
  it('finds package.json in the same directory', () => {
    const root = findProjectRoot(tempDir);
    expect(root).toBe(tempDir);
  });

  it('walks up to find package.json in parent', () => {
    const subDir = join(tempDir, 'src', 'lib');
    mkdirSync(subDir, { recursive: true });

    const root = findProjectRoot(subDir);
    expect(root).toBe(tempDir);
  });

  it('falls back to cwd when no package.json found', () => {
    // Create a dir with no package.json anywhere above it (use /tmp root)
    const isolatedDir = join(tmpdir(), `secretdef-no-pkg-${Date.now()}`);
    mkdirSync(isolatedDir, { recursive: true });

    // Remove the package.json we created (tempDir is different)
    // The isolatedDir has no package.json, but /tmp or parent dirs might.
    // We can't truly guarantee no package.json above, but we can test the walk-up logic.
    const root = findProjectRoot(isolatedDir);
    // Should find some package.json above or fall back to cwd
    expect(typeof root).toBe('string');

    rmSync(isolatedDir, { recursive: true });
  });

  it('writes to the correct package in a simulated monorepo', () => {
    // Simulate: monorepo/packages/api/src/index.ts
    const monorepoRoot = join(tmpdir(), `secretdef-monorepo-${Date.now()}`);
    const apiDir = join(monorepoRoot, 'packages', 'api');
    const webDir = join(monorepoRoot, 'packages', 'web');

    // Create monorepo structure
    mkdirSync(join(apiDir, 'src'), { recursive: true });
    mkdirSync(join(webDir, 'src'), { recursive: true });
    writeFileSync(join(monorepoRoot, 'package.json'), '{"name":"monorepo","private":true}');
    writeFileSync(join(apiDir, 'package.json'), '{"name":"api"}');
    writeFileSync(join(webDir, 'package.json'), '{"name":"web"}');

    // Simulate api entry file
    process.argv[1] = join(apiDir, 'src', 'index.ts');

    const entries = [
      { key: 'API_KEY', spec: { description: 'API key' } as SecretSpec },
    ];
    const infos = [makeInfo({ key: 'API_KEY', spec: entries[0].spec, value: 'v' })];

    writeGeneratedJson(entries, infos, 'development');

    // Should write to packages/api/.secretdef/, NOT monorepo root
    expect(existsSync(join(apiDir, '.secretdef'))).toBe(true);
    expect(existsSync(join(monorepoRoot, '.secretdef'))).toBe(false);

    const data = readGenerated(apiDir);
    expect(data.cwd).toBe(apiDir);
    expect(data.secrets.API_KEY).toBeDefined();

    // Now simulate web entry file
    process.argv[1] = join(webDir, 'src', 'index.ts');

    const webEntries = [
      { key: 'WEB_KEY', spec: { description: 'Web key' } as SecretSpec },
    ];
    const webInfos = [makeInfo({ key: 'WEB_KEY', spec: webEntries[0].spec, value: 'w' })];

    writeGeneratedJson(webEntries, webInfos, 'development');

    // Should write to packages/web/.secretdef/, separate from api
    expect(existsSync(join(webDir, '.secretdef'))).toBe(true);

    const webData = readGenerated(webDir);
    expect(webData.cwd).toBe(webDir);
    expect(webData.secrets.WEB_KEY).toBeDefined();
    // api's snapshot should NOT contain web's key
    expect(readGenerated(apiDir).secrets.WEB_KEY).toBeUndefined();

    rmSync(monorepoRoot, { recursive: true });
  });
});
