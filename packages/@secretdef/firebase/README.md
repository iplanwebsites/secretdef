# @secretdef/firebase

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for [**Firebase**](https://www.npmjs.com/package/firebase) (`firebase`) environment variables.

> This package declares the secrets required by [`firebase`](https://www.npmjs.com/package/firebase). It does **not** install or replace the official SDK — install both side by side.

## Install

```bash
npm install firebase @secretdef/firebase secretdef
```

## Usage

Every `import` of a `@secretdef/*` package calls `defineSecrets()` under the hood, registering its secrets globally. You then call `validateSecrets()` **once** at startup — with no arguments — to validate everything that was defined:

```ts
// app entry point
import { validateSecrets } from 'secretdef';

import '@secretdef/firebase';
// import '@secretdef/...';  ← other services

// Validates ALL secrets defined by any prior defineSecrets() call
validateSecrets();
```

You can also compose explicitly in a `secrets.ts` file — useful if you want to add your own app secrets alongside:

```ts
// secrets.ts
import { defineSecrets } from 'secretdef';
import { secrets as firebaseSecrets } from '@secretdef/firebase';

export const secrets = defineSecrets({
  ...firebaseSecrets,
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
| `FIREBASE_API_KEY` | Firebase API key | Yes |
| `FIREBASE_PROJECT_ID` | Firebase project ID | Yes |
| `FIREBASE_SERVICE_ACCOUNT_KEY` | Firebase service account JSON key | No |
| `FIREBASE_AUTH_EMULATOR_HOST` | Firebase Auth emulator host | No |
| `FIRESTORE_EMULATOR_HOST` | Firestore emulator host | No |
| `FIREBASE_DATABASE_EMULATOR_HOST` | Realtime Database emulator host | No |
| `FIREBASE_STORAGE_EMULATOR_HOST` | Cloud Storage emulator host | No |

## What are Secret Definitions?

[secretdef](https://secretdef.com) is an open standard for declaring which environment variables (secrets) a package or app requires — their names, descriptions, and constraints.

Instead of discovering missing secrets through cryptic runtime errors, secret definitions let you **validate everything at startup** with clear, actionable error messages. AI coding agents can also read these definitions to configure secrets automatically.

Learn more at [secretdef.com](https://secretdef.com)

## Links

- [`firebase`](https://www.npmjs.com/package/firebase) — Official Firebase SDK
- [Firebase on GitHub](https://github.com/firebase/firebase-js-sdk) — Source
- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
