# secretdef

**Declare the secrets your app needs. Fail fast with actionable errors.**

Like `@types` for secrets — zero dependencies, ~2KB.

```ts
import { defineSecrets, validateSecrets } from 'secretdef';

const secrets = defineSecrets({
  STRIPE_SECRET_KEY: {
    envVar: 'STRIPE_SECRET_KEY',
    description: 'Stripe API secret key — https://dashboard.stripe.com/apikeys',
  },
  DATABASE_URL: {
    envVar: 'DATABASE_URL',
    description: 'PostgreSQL connection string',
  },
});

validateSecrets(secrets);
```

Missing a secret? You get a clear error table with the env var name, description, and where to get it — not a cryptic crash at runtime.

## Links

- **Docs & full guide:** [secretdef.com](https://secretdef.com)
- **GitHub:** [github.com/iplanwebsites/secretdef](https://github.com/iplanwebsites/secretdef)
