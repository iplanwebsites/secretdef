# @secretdef/azure-content-moderator

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Azure Content Moderator** environment variables.

## Install

```bash
npm install @secretdef/azure-content-moderator secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/azure-content-moderator';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `AZURE_CONTENT_MODERATOR_KEY` | Azure Content Moderator key | Yes |
| `AZURE_CONTENT_MODERATOR_ENDPOINT` | Azure Content Moderator endpoint | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
