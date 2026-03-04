# @secretdef/supabase

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for [**Supabase**](https://www.npmjs.com/package/@supabase/supabase-js) (`@supabase/supabase-js`) environment variables.

> This package declares the secrets required by [`@supabase/supabase-js`](https://www.npmjs.com/package/@supabase/supabase-js). It does **not** install or replace the official SDK — install both side by side.

## Install

```bash
npm install @supabase/supabase-js @secretdef/supabase secretdef
```

## Usage

Every `import` of a `@secretdef/*` package calls `defineSecrets()` under the hood, registering its secrets globally. You then call `validateSecrets()` **once** at startup — with no arguments — to validate everything that was defined:

```ts
// app entry point
import { validateSecrets } from 'secretdef';

import '@secretdef/supabase';
// import '@secretdef/...';  ← other services

// Validates ALL secrets defined by any prior defineSecrets() call
validateSecrets();
```

You can also compose explicitly in a `secrets.ts` file — useful if you want to add your own app secrets alongside:

```ts
// secrets.ts
import { defineSecrets } from 'secretdef';
import { secrets as supabaseSecrets } from '@secretdef/supabase';

export const secrets = defineSecrets({
  ...supabaseSecrets,
  // Add your own app secrets
  // MY_APP_SECRET: { description: 'My app secret' },
});
```

```ts
// app entry point
import { validateSecrets } from 'secretdef';
import './secrets'; // defineSecrets() was called, secrets are registered

validateSecrets(); // no args — validates everything
```

> **Note:** `validateSecrets()` can also accept an explicit secrets object if you prefer full control: `validateSecrets(secrets)`.

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SUPABASE_URL` | Supabase project URL | Yes |
| `SUPABASE_ANON_KEY` | Supabase anon/public key | Yes |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key | Yes |

## What are Secret Definitions?

[secretdef](https://secretdef.com) is an open standard for declaring which environment variables (secrets) a package or app requires — their names, descriptions, and constraints.

Instead of discovering missing secrets through cryptic runtime errors, secret definitions let you **validate everything at startup** with clear, actionable error messages. AI coding agents can also read these definitions to configure secrets automatically.

Learn more at [secretdef.com](https://secretdef.com)

## Links

- [`@supabase/supabase-js`](https://www.npmjs.com/package/@supabase/supabase-js) — Official Supabase SDK
- [Supabase on GitHub](https://github.com/supabase/supabase-js) — Source
- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
