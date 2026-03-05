# secretdef examples

Minimal framework examples showing how secretdef reports missing secrets at startup.

## Quick start

```bash
pnpm install
pnpm --filter secretdef build
```

Then pick an example:

| Example | Port | Run |
|---------|------|-----|
| Express | 3100 | `pnpm --filter secretdef-example-express dev` |
| Hono    | 3101 | `pnpm --filter secretdef-example-hono dev` |
| Next.js | 3102 | `pnpm --filter secretdef-example-nextjs dev` |

## Try different scenarios

Each example defines two secrets:

- **`API_KEY`** — has a dev default (`dev-key-123`), so it won't warn in development
- **`DATABASE_URL`** — no default, so it will warn in development and error in production

### 1. All secrets provided (clean start)

```bash
pnpm --filter secretdef-example-express dev:ok
# equivalent to:
# API_KEY=sk-live-xxx DATABASE_URL=postgres://localhost/mydb tsx server.ts
```

No warnings — server starts cleanly:

```
Express example running on http://localhost:3100
```

### 2. Missing secrets in development (warning)

```bash
pnpm --filter secretdef-example-express dev:missing
```

secretdef prints a warning table but the server still starts:

```
⚠️  1 secret problem [env=development]:

  🔑 DATABASE_URL — missing
     Database connection string
     dashboard: https://example.com/db

  Server will start, but missing secrets will throw if accessed at runtime.

  Add to your .env file:

    DATABASE_URL=

Express example running on http://localhost:3100
```

Note: `API_KEY` doesn't appear — its dev default (`dev-key-123`) satisfies the requirement.

### 3. Missing secrets in production (hard error)

```bash
pnpm --filter secretdef-example-express dev:production
# equivalent to:
# NODE_ENV=production tsx server.ts
```

secretdef prints an error table and exits with code 1:

```
❌ 2 secret problems [env=production]:

  🔑 API_KEY — missing
     Main API key
     dashboard: https://example.com/settings

  🔑 DATABASE_URL — missing
     Database connection string
     dashboard: https://example.com/db

  Add to your .env file:

    API_KEY=
    DATABASE_URL=
```

Dev defaults don't apply in production, so both secrets are required.

### 4. Accessing a missing secret at runtime

Even when the server starts with warnings (scenario 2), accessing a missing secret throws:

```bash
# Start with DATABASE_URL missing
pnpm --filter secretdef-example-express dev:missing

# In another terminal:
curl http://localhost:3100/secret
# → {"API_KEY":"dev-key-123"}  (dev default kicks in)
```

If you tried to call `useSecret('DATABASE_URL', secrets)`, it would throw a `SecretNotAvailableError` with an actionable message:

```
SecretNotAvailable: DATABASE_URL is not configured.

  Environment variable: DATABASE_URL
  Description:          Database connection string
  Where to find it:     https://example.com/db
  Defined in:           src/secrets.ts
  Current environment:  development

  To fix: set DATABASE_URL in your environment or .env file.
```

## Running tests

```bash
pnpm --filter "secretdef-example-*" test
```

All 15 tests (5 per framework) cover:
1. Health check returns `{ status: "ok" }`
2. `/secret` returns API_KEY from env when set
3. `/secret` returns dev default when env var is unset
4. `validateSecrets` warns only about `DATABASE_URL` (not `API_KEY`)
5. `useSecret` throws `SecretNotAvailableError` for missing `DATABASE_URL`
