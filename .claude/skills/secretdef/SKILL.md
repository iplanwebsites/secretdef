---
name: secretdef
description: Help users define, validate, and troubleshoot secret (env var) requirements using the secretdef library. Use when code imports secretdef, when errors mention SecretNotAvailableError, or when the user needs to add/fix environment variable declarations.
---

# secretdef — Declare your secret dependencies

secretdef is a zero-dependency TypeScript library for declaring which environment variables (secrets) your app needs, with human- and AI-readable descriptions. It validates at startup and throws structured, actionable errors at runtime.

## Core API

```typescript
import {
  defineSecrets,
  validateSecrets,
  useSecret,
} from "secretdef";
import type { SecretSpec } from "secretdef";
```

### defineSecrets(specs)

Declares secret requirements. Returns normalized `Record<string, SecretSpec>` and always auto-registers to the global registry.

```typescript
import { defineSecrets } from "secretdef";

export const secrets = defineSecrets({
  STRIPE_SECRET_KEY: {
    description: "Stripe API secret key. Starts with sk_live_ (not pk_).",
    dashboard: "https://dashboard.stripe.com/apikeys",
    environments: {
      development: { envVar: "STRIPE_TEST_SECRET_KEY" },
    },
  },
  DATABASE_URL: {
    description: "Postgres connection string — format: postgresql://user:pass@host/db",
    dashboard: "https://console.neon.tech",
    environments: {
      development: { default: "postgresql://localhost:5432/myapp_dev" },
    },
  },
});
```

### SecretSpec type

```typescript
type SecretSpec = {
  description?: string; // Human-readable description
  dashboard?: string; // URL to the service dashboard/settings page
  required?: boolean; // Default: true
  validate?: 'str' | 'bool' | 'num' | 'email' | 'host' | 'port' | 'url' | 'json' | ((input: string) => unknown);
  choices?: readonly string[]; // Allowlist of valid values
  example?: string; // Example value shown in error output (e.g. "sk_live_...")
  devDefault?: string; // Default value used when NODE_ENV is not 'production'
  group?: string; // Group/tag for organizing secrets in output (e.g. "payments")
  environments?: {
    [env: string]: {
      envVar?: string; // Different env var name for this environment
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
import { validateSecrets } from "secretdef";
import "./secrets";
const env = validateSecrets();
```

**Explicit spreading (full control):**

```typescript
import { validateSecrets } from "secretdef";
import { secrets as app } from "./secrets";
export const env = validateSecrets({ ...app });
```

### useSecret(key, specs?)

Returns the secret value or throws `SecretNotAvailableError` with structured context:

- Env var name
- Description (with URL extracted separately)
- Defining file path
- Current environment
- Fix instructions

```typescript
import { useSecret } from "secretdef";
const key = useSecret("STRIPE_SECRET_KEY");
```

### enableAutoRegister() — DEPRECATED

No-op kept for backward compatibility. Auto-registration is always on — every `defineSecrets()` call automatically registers to the global registry.

## Published definitions (@secretdef/\*)

Pre-built definitions for popular services ship as `@secretdef/<service>` packages:

```typescript
import { secrets as stripe } from "@secretdef/stripe";
import { secrets as resend } from "@secretdef/resend";
```

Available: stripe, paypal, auth0, clerk, supabase, firebase, sendgrid, resend, postmark, openai, anthropic, aws, gcp, planetscale, neon, turso, twilio, segment, mixpanel.

## Writing good descriptions

Include in each secret definition:

1. **`description`** — What the key is, format hints (e.g. "Stripe API secret key. Starts with sk_live_.")
2. **`dashboard`** — URL to the service dashboard where the key can be found/provisioned
3. **Who can provision it** — e.g. mention "requires Admin role" in description

## When fixing SecretNotAvailableError

The error already tells you everything:

1. Read the env var name from the error
2. Read the description and dashboard URL
3. Set the env var in `.env`, CI secrets, or your hosting dashboard
4. If in development, check `environments.development` for a different env var name or default
