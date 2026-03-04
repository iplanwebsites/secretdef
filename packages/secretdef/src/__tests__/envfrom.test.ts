import { describe, it, expect, expectTypeOf } from 'vitest';
import { defineSecrets } from '../index.js';
import type { EnvFrom } from '../index.js';

describe('EnvFrom type helper', () => {
  it('maps defineSecrets keys to string values', () => {
    const secrets = defineSecrets({
      DATABASE_URL: { description: 'Postgres connection string' },
      STRIPE_KEY: 'Stripe API key',
      OPTIONAL_VAR: { required: false },
    });

    type Env = EnvFrom<typeof secrets>;

    // Type-level assertions: each key should be string
    expectTypeOf<Env>().toEqualTypeOf<{
      DATABASE_URL: string;
      STRIPE_KEY: string;
      OPTIONAL_VAR: string;
    }>();
  });

  it('works with ProcessEnv augmentation pattern', () => {
    const secrets = defineSecrets({
      API_KEY: { description: 'API key' },
      DB_HOST: 'Database host',
    });

    // Simulate the augmentation pattern — EnvFrom produces a plain Record
    type Env = EnvFrom<typeof secrets>;

    // Verify the keys are preserved as a union
    type Keys = keyof Env;
    expectTypeOf<Keys>().toEqualTypeOf<'API_KEY' | 'DB_HOST'>();
  });

  it('produces an empty object for empty specs', () => {
    const secrets = defineSecrets({});
    type Env = EnvFrom<typeof secrets>;

    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    expectTypeOf<Env>().toEqualTypeOf<{}>();
  });

  it('is usable at runtime as a type annotation', () => {
    const secrets = defineSecrets({
      PORT: { description: 'Server port', validate: 'port' },
    });

    type Env = EnvFrom<typeof secrets>;

    // A value typed as Env should have the right shape
    const env: Env = { PORT: '3000' };
    expect(env.PORT).toBe('3000');
  });
});
