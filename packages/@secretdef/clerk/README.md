# @secretdef/clerk

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for [**Clerk**](https://www.npmjs.com/package/@clerk/clerk-sdk-node) (`@clerk/clerk-sdk-node`) environment variables.

> This package declares the secrets required by [`@clerk/clerk-sdk-node`](https://www.npmjs.com/package/@clerk/clerk-sdk-node). It does **not** install or replace the official SDK — install both side by side.

## Install

```bash
npm install @clerk/clerk-sdk-node @secretdef/clerk secretdef
```

## Usage

Every `import` of a `@secretdef/*` package calls `defineSecrets()` under the hood, registering its secrets globally. You then call `validateSecrets()` **once** at startup — with no arguments — to validate everything that was defined:

```ts
// app entry point
import { validateSecrets } from 'secretdef';

import '@secretdef/clerk';
// import '@secretdef/...';  ← other services

// Validates ALL secrets defined by any prior defineSecrets() call
validateSecrets();
```

You can also compose explicitly in a `secrets.ts` file — useful if you want to add your own app secrets alongside:

```ts
// secrets.ts
import { defineSecrets } from 'secretdef';
import { secrets as clerkSecrets } from '@secretdef/clerk';

export const secrets = defineSecrets({
  ...clerkSecrets,
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
| `CLERK_SECRET_KEY` | Clerk secret key | Yes |
| `CLERK_PUBLISHABLE_KEY` | Clerk publishable key | Yes |
| `CLERK_JWT_KEY` | Clerk JWT verification key | No |
| `CLERK_SIGN_IN_URL` | Sign-in page URL | No |
| `CLERK_DOMAIN` | Clerk frontend API domain | No |
| `CLERK_PROXY_URL` | Clerk proxy URL | No |
| `CLERK_API_URL` | Clerk backend API URL | No |
| `CLERK_ENCRYPTION_KEY` | Encryption key for Clerk session tokens | No |
| `CLERK_MACHINE_SECRET_KEY` | Clerk machine-to-machine secret key | No |
| `CLERK_TELEMETRY_DISABLED` | Disable Clerk telemetry | No |

## What are Secret Definitions?

[secretdef](https://secretdef.com) is an open standard for declaring which environment variables (secrets) a package or app requires — their names, descriptions, and constraints.

Instead of discovering missing secrets through cryptic runtime errors, secret definitions let you **validate everything at startup** with clear, actionable error messages. AI coding agents can also read these definitions to configure secrets automatically.

Learn more at [secretdef.com](https://secretdef.com)

## Links

- [`@clerk/clerk-sdk-node`](https://www.npmjs.com/package/@clerk/clerk-sdk-node) — Official Clerk SDK
- [Clerk on GitHub](https://github.com/clerk/javascript) — Source
- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
