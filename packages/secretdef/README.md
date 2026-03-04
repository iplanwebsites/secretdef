# secretdef

**Declare the secrets your app needs. Fail fast with actionable errors.**

Like `@types` for secrets — zero dependencies, ~2KB.

```ts
import { defineSecrets, validateSecrets } from 'secretdef';

const secrets = defineSecrets({
  STRIPE_SECRET_KEY: {
    description: 'Stripe API secret key — https://dashboard.stripe.com/apikeys',
    example: 'sk_live_...',
    validate: 'str',
  },
  DATABASE_URL: {
    description: 'PostgreSQL connection string',
    validate: 'url',
    devDefault: 'postgresql://localhost:5432/myapp_dev',
  },
  LOG_LEVEL: {
    description: 'Logging verbosity',
    choices: ['debug', 'info', 'warn', 'error'],
    devDefault: 'debug',
  },
});

validateSecrets(secrets);
```

Missing or invalid? You get a clear error table — not a cryptic crash at runtime.

## Features

- **Validation** — built-in validators (`str`, `bool`, `num`, `email`, `host`, `port`, `url`, `json`) or custom functions
- **Choices** — allowlist of valid values
- **Dev defaults** — `devDefault` provides fallback values outside production
- **Examples** — `example` field shown in error output to help users find the right value
- **Groups** — organize secrets in validation output with `group`
- **String shorthand** — `{ MY_KEY: 'description' }` expands to `{ MY_KEY: { description: 'description' } }`
- **Environment overrides** — different env var names, defaults, or required flags per environment
- **Zero dependencies** — works with Node.js, Bun, Deno

## Examples

See the [`examples/`](../../examples/) directory for complete framework integrations:

| Framework | Dir | What it shows |
|-----------|-----|---------------|
| Express | `examples/express/` | Basic setup with `validateSecrets` + `useSecret` |
| Hono | `examples/hono/` | Same pattern, Hono framework |
| Next.js | `examples/nextjs/` | Instrumentation hook for startup validation |

Each example demonstrates: dev defaults, missing secret warnings, production hard errors, and runtime `useSecret` throws.

## Links

- **Docs & full guide:** [secretdef.com](https://secretdef.com)
- **GitHub:** [github.com/iplanwebsites/secretdef](https://github.com/iplanwebsites/secretdef)
