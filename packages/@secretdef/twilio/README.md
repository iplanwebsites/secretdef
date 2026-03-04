# @secretdef/twilio

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for [**Twilio**](https://www.npmjs.com/package/twilio) (`twilio`) environment variables.

> This package declares the secrets required by [`twilio`](https://www.npmjs.com/package/twilio). It does **not** install or replace the official SDK — install both side by side.

## Install

```bash
npm install twilio @secretdef/twilio secretdef
```

## Usage

Every `import` of a `@secretdef/*` package calls `defineSecrets()` under the hood, registering its secrets globally. You then call `validateSecrets()` **once** at startup — with no arguments — to validate everything that was defined:

```ts
// app entry point
import { validateSecrets } from 'secretdef';

import '@secretdef/twilio';
// import '@secretdef/...';  ← other services

// Validates ALL secrets defined by any prior defineSecrets() call
validateSecrets();
```

You can also compose explicitly in a `secrets.ts` file — useful if you want to add your own app secrets alongside:

```ts
// secrets.ts
import { defineSecrets } from 'secretdef';
import { secrets as twilioSecrets } from '@secretdef/twilio';

export const secrets = defineSecrets({
  ...twilioSecrets,
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
| `TWILIO_ACCOUNT_SID` | Twilio account SID | Yes |
| `TWILIO_AUTH_TOKEN` | Twilio auth token | Yes |
| `TWILIO_REGION` | Twilio API region | No |
| `TWILIO_EDGE` | Twilio edge location | No |
| `TWILIO_LOG_LEVEL` | Twilio SDK log level | No |

## What are Secret Definitions?

[secretdef](https://secretdef.com) is an open standard for declaring which environment variables (secrets) a package or app requires — their names, descriptions, and constraints.

Instead of discovering missing secrets through cryptic runtime errors, secret definitions let you **validate everything at startup** with clear, actionable error messages. AI coding agents can also read these definitions to configure secrets automatically.

Learn more at [secretdef.com](https://secretdef.com)

## Links

- [`twilio`](https://www.npmjs.com/package/twilio) — Official Twilio SDK
- [Twilio on GitHub](https://github.com/twilio/twilio-node) — Source
- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
