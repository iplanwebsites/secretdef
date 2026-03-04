# @secretdef/sendgrid

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for [**SendGrid**](https://www.npmjs.com/package/@sendgrid/mail) (`@sendgrid/mail`) environment variables.

> This package declares the secrets required by [`@sendgrid/mail`](https://www.npmjs.com/package/@sendgrid/mail). It does **not** install or replace the official SDK — install both side by side.

## Install

```bash
npm install @sendgrid/mail @secretdef/sendgrid secretdef
```

## Usage

Every `import` of a `@secretdef/*` package calls `defineSecrets()` under the hood, registering its secrets globally. You then call `validateSecrets()` **once** at startup — with no arguments — to validate everything that was defined:

```ts
// app entry point
import { validateSecrets } from 'secretdef';

import '@secretdef/sendgrid';
// import '@secretdef/...';  ← other services

// Validates ALL secrets defined by any prior defineSecrets() call
validateSecrets();
```

You can also compose explicitly in a `secrets.ts` file — useful if you want to add your own app secrets alongside:

```ts
// secrets.ts
import { defineSecrets } from 'secretdef';
import { secrets as sendgridSecrets } from '@secretdef/sendgrid';

export const secrets = defineSecrets({
  ...sendgridSecrets,
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
| `SENDGRID_API_KEY` | SendGrid API key | Yes |

## What are Secret Definitions?

[secretdef](https://secretdef.com) is an open standard for declaring which environment variables (secrets) a package or app requires — their names, descriptions, and constraints.

Instead of discovering missing secrets through cryptic runtime errors, secret definitions let you **validate everything at startup** with clear, actionable error messages. AI coding agents can also read these definitions to configure secrets automatically.

Learn more at [secretdef.com](https://secretdef.com)

## Links

- [`@sendgrid/mail`](https://www.npmjs.com/package/@sendgrid/mail) — Official SendGrid SDK
- [SendGrid on GitHub](https://github.com/sendgrid/sendgrid-nodejs) — Source
- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
