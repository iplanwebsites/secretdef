# @secretdef/passji

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for [**Passji**](https://passji.com) (`passji`) environment variables.

> This package declares the secrets required by [`passji`](https://www.npmjs.com/package/passji). It does **not** install or replace the official SDK — install both side by side.

## Install

```bash
npm install passji @secretdef/passji secretdef
```

## Usage

Every `import` of a `@secretdef/*` package calls `defineSecrets()` under the hood, registering its secrets globally. You then call `validateSecrets()` **once** at startup — with no arguments — to validate everything that was defined:

```ts
// app entry point
import { validateSecrets } from 'secretdef';

import '@secretdef/passji';
// import '@secretdef/...';  ← other services

// Validates ALL secrets defined by any prior defineSecrets() call
validateSecrets();
```

You can also compose explicitly in a `secrets.ts` file — useful if you want to add your own app secrets alongside:

```ts
// secrets.ts
import { defineSecrets } from 'secretdef';
import { secrets as passjiSecrets } from '@secretdef/passji';

export const secrets = defineSecrets({
  ...passjiSecrets,
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
| `PASSJI_CLIENT_ID` | Passji OAuth client ID | Yes |
| `PASSJI_CLIENT_SECRET` | Passji OAuth client secret | Yes |
| `PASSJI_ISSUER` | Passji issuer URL (defaults to https://passji.com) | No |

## What is Passji?

[Passji](https://passji.com) is an emoji identity provider. Users pick 3-7 emoji as their identity and authenticate with passkeys (Face ID, fingerprint, YubiKey). Apps integrate via standard OIDC/OAuth 2.0.

## What are Secret Definitions?

[secretdef](https://secretdef.com) is an open standard for declaring which environment variables (secrets) a package or app requires — their names, descriptions, and constraints.

Instead of discovering missing secrets through cryptic runtime errors, secret definitions let you **validate everything at startup** with clear, actionable error messages. AI coding agents can also read these definitions to configure secrets automatically.

Learn more at [secretdef.com](https://secretdef.com)

## Links

- [`passji`](https://www.npmjs.com/package/passji) — Official Passji SDK
- [Passji](https://passji.com) — Emoji identity provider
- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
