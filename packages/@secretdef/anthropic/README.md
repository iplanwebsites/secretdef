# @secretdef/anthropic

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for [**Anthropic**](https://www.npmjs.com/package/@anthropic-ai/sdk) (`@anthropic-ai/sdk`) environment variables.

> This package declares the secrets required by [`@anthropic-ai/sdk`](https://www.npmjs.com/package/@anthropic-ai/sdk). It does **not** install or replace the official SDK — install both side by side.

## Install

```bash
npm install @anthropic-ai/sdk @secretdef/anthropic secretdef
```

## Usage

Every `import` of a `@secretdef/*` package calls `defineSecrets()` under the hood, registering its secrets globally. You then call `validateSecrets()` **once** at startup — with no arguments — to validate everything that was defined:

```ts
// app entry point
import { validateSecrets } from 'secretdef';

import '@secretdef/anthropic';
// import '@secretdef/...';  ← other services

// Validates ALL secrets defined by any prior defineSecrets() call
validateSecrets();
```

You can also compose explicitly in a `secrets.ts` file — useful if you want to add your own app secrets alongside:

```ts
// secrets.ts
import { defineSecrets } from 'secretdef';
import { secrets as anthropicSecrets } from '@secretdef/anthropic';

export const secrets = defineSecrets({
  ...anthropicSecrets,
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
| `ANTHROPIC_API_KEY` | Anthropic API key | Yes |
| `ANTHROPIC_AUTH_TOKEN` | Anthropic auth token (alternative to API key) | No |
| `ANTHROPIC_BASE_URL` | Override base URL for API requests | No |
| `ANTHROPIC_ORG_ID` | Anthropic organization ID | No |
| `ANTHROPIC_BEDROCK_BASE_URL` | AWS Bedrock endpoint URL | No |
| `ANTHROPIC_FOUNDRY_API_KEY` | Anthropic Foundry API key | No |
| `ANTHROPIC_FOUNDRY_RESOURCE` | Anthropic Foundry resource name | No |
| `ANTHROPIC_FOUNDRY_BASE_URL` | Anthropic Foundry endpoint URL | No |

## What are Secret Definitions?

[secretdef](https://secretdef.com) is an open standard for declaring which environment variables (secrets) a package or app requires — their names, descriptions, and constraints.

Instead of discovering missing secrets through cryptic runtime errors, secret definitions let you **validate everything at startup** with clear, actionable error messages. AI coding agents can also read these definitions to configure secrets automatically.

Learn more at [secretdef.com](https://secretdef.com)

## Links

- [`@anthropic-ai/sdk`](https://www.npmjs.com/package/@anthropic-ai/sdk) — Official Anthropic SDK
- [Anthropic on GitHub](https://github.com/anthropics/anthropic-sdk-typescript) — Source
- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
