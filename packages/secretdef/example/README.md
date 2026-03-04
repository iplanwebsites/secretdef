# secretdef examples

Run any example with `npx tsx`:

```bash
# Auto-register style (easy)
npx tsx example/auto-register.ts

# Explicit spreading (no global state)
npx tsx example/explicit.ts

# With @secretdef/stripe community package
npx tsx example/with-community-package.ts

# CI/script: validate secrets without booting the app
npx tsx example/check-secrets.ts
```

Set env vars to see resolved values:

```bash
API_KEY=my-key npx tsx example/auto-register.ts
```

Without env vars, you'll see the warning/error output that secretdef produces.

## check-secrets pattern

Add a `secrets:check` script to validate your `.env` without starting the app:

```json
{ "scripts": { "secrets:check": "npx tsx scripts/check-secrets.ts" } }
```

The trick: your config module calls `validateSecrets()` at import time, then exits early when `CHECK_SECRETS_ONLY=1` is set. See `app-with-check.ts` and `check-secrets.ts` for the full pattern.
