# @secretdef/openai

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for [**OpenAI**](https://www.npmjs.com/package/openai) (`openai`) environment variables.

> This package declares the secrets required by [`openai`](https://www.npmjs.com/package/openai). It does **not** install or replace the official SDK — install both side by side.

## Install

```bash
npm install openai @secretdef/openai secretdef
```

## Usage

Every `import` of a `@secretdef/*` package calls `defineSecrets()` under the hood, registering its secrets globally. You then call `validateSecrets()` **once** at startup — with no arguments — to validate everything that was defined:

```ts
// app entry point
import { validateSecrets } from 'secretdef';

import '@secretdef/openai';
// import '@secretdef/...';  ← other services

// Validates ALL secrets defined by any prior defineSecrets() call
validateSecrets();
```

You can also compose explicitly in a `secrets.ts` file — useful if you want to add your own app secrets alongside:

```ts
// secrets.ts
import { defineSecrets } from 'secretdef';
import { secrets as openaiSecrets } from '@secretdef/openai';

export const secrets = defineSecrets({
  ...openaiSecrets,
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
| `OPENAI_API_KEY` | OpenAI API key | Yes |
| `OPENAI_ORG_ID` | OpenAI organization ID | No |
| `OPENAI_PROJECT_ID` | OpenAI project ID | No |
| `OPENAI_BASE_URL` | Override base URL for API requests | No |
| `OPENAI_API_VERSION` | API version for Azure OpenAI | No |
| `OPENAI_WEBHOOK_SECRET` | Webhook signing secret | No |
| `AZURE_OPENAI_API_KEY` | Azure OpenAI API key | No |
| `AZURE_OPENAI_ENDPOINT` | Azure OpenAI endpoint URL | No |

## What are Secret Definitions?

[secretdef](https://secretdef.com) is an open standard for declaring which environment variables (secrets) a package or app requires — their names, descriptions, and constraints.

Instead of discovering missing secrets through cryptic runtime errors, secret definitions let you **validate everything at startup** with clear, actionable error messages. AI coding agents can also read these definitions to configure secrets automatically.

Learn more at [secretdef.com](https://secretdef.com)

## Links

- [`openai`](https://www.npmjs.com/package/openai) — Official OpenAI SDK
- [OpenAI on GitHub](https://github.com/openai/openai-node) — Source
- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
