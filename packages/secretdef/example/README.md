# secretdef examples

Run any example with `npx tsx`:

```bash
# Auto-register style (easy)
npx tsx example/auto-register.ts

# Explicit spreading (no global state)
npx tsx example/explicit.ts

# With @secretdef/stripe community package
npx tsx example/with-community-package.ts
```

Set env vars to see resolved values:

```bash
API_KEY=my-key npx tsx example/auto-register.ts
```

Without env vars, you'll see the warning/error output that secretdef produces.
