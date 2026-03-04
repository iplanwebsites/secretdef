---
name: secretdef
description: Help users define, validate, and troubleshoot secret (env var) requirements using the secretdef library. Use when code imports secretdef, when errors mention SecretNotAvailableError, or when the user needs to add/fix environment variable declarations or secrets or env vars.
---

# secretdef — Declare your secret dependencies

secretdef is a zero-dependency TypeScript library for declaring which environment variables (secrets) your app needs, with human- and AI-readable descriptions. It validates at startup and throws structured, actionable errors at runtime.

## Core API

```typescript
import {
  defineSecrets,
  validateSecrets,
  useSecret,
  enableAutoRegister,
} from "secretdef";
import type { SecretSpec } from "secretdef";
```

### defineSecrets(specs)

Declares secret requirements. Returns the same `Record<string, SecretSpec>` passed in. Pure data — no side effects unless `enableAutoRegister()` was called first.

```typescript
// src/secrets.ts
import { defineSecrets } from "secretdef";

export const secrets = defineSecrets({
  STRIPE_SECRET_KEY: {
    envVar: "STRIPE_SECRET_KEY",
    description:
      "Stripe API secret key. Starts with sk_live_ (not pk_). https://dashboard.stripe.com/apikeys",
    envOverrides: {
      development: { envVar: "STRIPE_TEST_SECRET_KEY" },
    },
  },
  DATABASE_URL: {
    envVar: "DATABASE_URL",
    description:
      "Postgres connection string — format: postgresql://user:pass@host/db",
    envOverrides: {
      development: { default: "postgresql://localhost:5432/myapp_dev" },
    },
  },
});
```

### SecretSpec type

```typescript
type SecretSpec = {
  envVar: string; // The environment variable name
  description?: string; // Human-readable — include a dashboard URL!
  required?: boolean; // Default: true
  envOverrides?: {
    [env: string]: {
      envVar?: string; // Different env var name per environment
      required?: boolean;
      default?: string;
    };
  };
};
```

### validateSecrets(specs?, env?, options?)

Validates secrets against the environment. Returns `Record<string, string>` of resolved values.

- **Production** (`NODE_ENV=production`): missing required secrets print an error table and call `process.exit(1)`.
- **Development**: missing secrets print a warning. Server starts — they throw if accessed via `useSecret()`.

Two styles:

**Auto-register (easy):**

```typescript
import { enableAutoRegister, validateSecrets } from "secretdef";
enableAutoRegister();
import "./secrets";
const env = validateSecrets();
```

**Explicit spreading (no global state):**

```typescript
import { validateSecrets } from "secretdef";
import { secrets as app } from "./secrets";
export const env = validateSecrets({ ...app });
```

### useSecret(key, specs?)

Returns the secret value or throws `SecretNotAvailableError` with structured context:

- Env var name
- Description (with URL extracted separately)
- Registering file path
- Current environment
- Fix instructions

```typescript
import { useSecret } from "secretdef";
const key = useSecret("STRIPE_SECRET_KEY");
```

### enableAutoRegister()

Call once at app entry, before imports. Every subsequent `defineSecrets()` call pushes specs to a global registry. Then `validateSecrets()` with no arguments checks them all.

## Published definitions (@secretdef/\*)

Pre-built definitions for popular services ship as `@secretdef/<service>` packages. Each exports `secrets`:

```typescript
import { secrets as stripe } from "@secretdef/stripe";
import { secrets as resend } from "@secretdef/resend";
```

Available: stripe, paypal, auth0, clerk, supabase, firebase, sendgrid, resend, postmark, openai, anthropic, aws, gcp, planetscale, neon, turso, twilio, segment, mixpanel.

## Writing good descriptions

Always include in the `description` field:

1. **What the key is** — e.g. "Stripe API secret key"
2. **Format hint** — e.g. "Starts with sk*live* (not pk\_)"
3. **Where to get it** — dashboard URL
4. **Who can provision it** — e.g. "requires Admin role"

## When fixing SecretNotAvailableError

The error already tells you everything:

1. Read the env var name from the error
2. Read the description and dashboard URL
3. Set the env var in `.env`, CI secrets, or your hosting dashboard
4. If in development, check `envOverrides.development` for a different env var name or default

## Project structure convention

Define secrets next to the code that uses them:

```
src/
  secrets.ts              # App-level secrets
  modules/
    db/secrets.ts         # Database secrets
    stripe/secrets.ts     # Payment secrets
```

Collect at the top level with auto-register or explicit spreading.
