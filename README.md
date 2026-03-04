# secretdef

[![GitHub](https://img.shields.io/github/stars/iplanwebsites/secretdef?style=social)](https://github.com/iplanwebsites/secretdef)
[![Website](https://img.shields.io/badge/docs-secretdef.com-blue)](https://secretdef.com)

> Declare the secrets your packages require. Fail fast with actionable errors.

## Why

Every service you integrate needs secrets — API keys, tokens, connection strings. But there's no standard way for code to say _which_ secrets it needs, _where_ to get them, or _which variant_ to use per environment. That knowledge lives in READMEs, Slack threads, or someone's head.

The result:

- **Deploys fail with useless errors.** `TypeError: Cannot read properties of undefined` tells you nothing. You redeploy 3 times before you find the missing key.
- **Nobody knows what's provisioned where.** Is Stripe set up in staging? Which Supabase project is production pointing at? Where do you even get a Resend key? It's tribal knowledge.
- **AI agents hit a wall.** Cursor, Claude Code, and Copilot can scaffold a Stripe integration in seconds — then the deploy crashes on a missing env var. The agent sees a generic TypeError, not "you forgot `STRIPE_SECRET_KEY`", and enters a guessing loop.

secretdef fixes this by putting secret requirements _in code_ — which secrets are needed, which env var to set, where to find the value, and how it differs per environment. One `validateSecrets()` call at startup checks everything and prints exactly what's missing and how to fix it.

**For AI agents specifically:** instead of opaque runtime crashes, agents get structured errors with the env var name, a description, a URL to the dashboard, and the file that registered the requirement. That's enough to self-resolve the issue or give the developer a one-step fix.

The core library is zero-dependency, ~2KB, and works with any secrets provider.

## Install

```bash
npm i secretdef
```

## Quick Start with AI

secretdef includes an Agent Skill that works with Claude Code, Cursor, Codex, and other AI coding tools.

```bash
npx skills add iplanwebsites/secretdef
```

Then open your project and tell the AI:

> Create secret definitions. Ensure all secrets have definitions.

The skill scans your codebase for `process.env` usage, generates `defineSecrets` calls with rich descriptions, and wires up validation at startup.

## Manual Setup

### 1. Define your secrets

Create a `secrets.ts` in your project (or in each module) to declare what your app needs:

```ts
// src/secrets.ts
import { defineSecrets } from "secretdef";

export const secrets = defineSecrets({
  STRIPE_SECRET_KEY: {
    description: "Stripe API secret key — https://dashboard.stripe.com/apikeys",
    environments: {
      development: { envVar: "STRIPE_TEST_SECRET_KEY" },
    },
  },
  DATABASE_URL: {
    description: "Postgres connection string — check your hosting dashboard",
  },
  SENDGRID_API_KEY: {
    description:
      "SendGrid API key — https://app.sendgrid.com/settings/api_keys",
  },
});
```

If you maintain an SDK or module, you can ship a `secrets.ts` alongside it so consumers know exactly what env vars are required.

### 2. Validate at startup

#### The easy way: auto-register

Call `enableAutoRegister()` once at the top of your app. Every `defineSecrets` call automatically registers its specs. Then `validateSecrets()` checks them all.

```ts
// src/index.ts
import { enableAutoRegister, validateSecrets } from "secretdef";
enableAutoRegister();

import "./secrets"; // your app secrets
import "./modules/db/secrets"; // module-level secrets

const env = validateSecrets(); // checks everything that was registered
```

#### The structured way: explicit spreading

For full control, spread specs into a single `validateSecrets` call. No global state.

```ts
// src/env.ts
import { validateSecrets } from "secretdef";
import { secrets as app } from "./secrets";
import { secrets as db } from "./modules/db/secrets";

export const env = validateSecrets({
  ...app,
  ...db,
});
```

Both approaches produce the same result — a validated map of secret values.

### Validation output

**In production** — missing secrets print an error table and exit:

```
🔴 Missing 2 secret(s) [env=production]:

  ✗ STRIPE_SECRET_KEY
    Stripe API secret key — https://dashboard.stripe.com/apikeys
    registered by: node_modules/@secretdef/stripe/index.ts

  ✗ SENDGRID_API_KEY
    SendGrid API key — https://app.sendgrid.com/settings/api_keys
    registered by: node_modules/@secretdef/sendgrid/index.ts
```

**In development** — missing secrets warn but don't block:

```
⚠️  Missing 2 secret(s) [env=development]:
  ...
Server will start. These will throw if accessed at runtime.
```

## API

### `defineSecrets(specs)` — Declare secret requirements, returns pure data

### `validateSecrets(specs?, env?, options?)` — Validate a map or the auto-registry

### `useSecret(key, specs?)` — Read a single secret with structured errors

### `enableAutoRegister()` — Opt-in: `defineSecrets` calls also push to global registry

### `SecretSpec` — TypeScript type for secret definitions

See the [full documentation](https://secretdef.com/docs) for details.

## Better errors, for humans and agents

When a secret is missing, secretdef tells you exactly what's wrong and how to fix it:

```
SecretNotAvailable: STRIPE_SECRET_KEY is not configured.

  Environment variable: STRIPE_SECRET_KEY
  Description:          Stripe API secret key
  Where to find it:     https://dashboard.stripe.com/apikeys
  Registered by:        src/modules/stripe/config.ts
  Current environment:  development

  To fix: set STRIPE_SECRET_KEY in your environment or .env file.
```

Compare that to: `TypeError: Cannot read properties of undefined (reading 'trim')`. One is self-resolving. The other starts a debugging session.

This matters even more with AI coding agents — Cursor, Claude Code, Copilot all parse error output. A structured error with the var name, a dashboard URL, and the registering file gives them everything they need to help you fix it in one step.

## Community `@secretdef/*` packages

Like `@types` for TypeScript, `@secretdef/*` packages provide ready-made secret definitions for popular services. These are community-maintained — contributions and corrections are welcome.

> **Note:** Most SDKs don't hardcode which env vars they read. These packages represent common conventions, not guarantees. Always verify against the SDK you're using. When in doubt, define your own secrets directly in your app.

| Category  | Packages                                                                             |
| --------- | ------------------------------------------------------------------------------------ |
| Payment   | `@secretdef/stripe`, `@secretdef/paypal`                                             |
| Auth      | `@secretdef/auth0`, `@secretdef/clerk`, `@secretdef/supabase`, `@secretdef/firebase` |
| Email     | `@secretdef/sendgrid`, `@secretdef/resend`, `@secretdef/postmark`                    |
| AI        | `@secretdef/openai`, `@secretdef/anthropic`                                          |
| Cloud     | `@secretdef/aws`, `@secretdef/gcp`                                                   |
| Database  | `@secretdef/planetscale`, `@secretdef/neon`, `@secretdef/turso`                      |
| Messaging | `@secretdef/twilio`                                                                  |
| Analytics | `@secretdef/segment`, `@secretdef/mixpanel`                                          |

## Contributing

Add a new `@secretdef/*` package by creating a PR with a new directory under `packages/@secretdef/`. See the existing packages for the expected structure.

## Links

- **Website & docs:** [secretdef.com](https://secretdef.com)
- **GitHub:** [github.com/iplanwebsites/secretdef](https://github.com/iplanwebsites/secretdef)
- **npm:** [npmjs.com/package/secretdef](https://www.npmjs.com/package/secretdef)

## License

MIT
