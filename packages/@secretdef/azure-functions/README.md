# @secretdef/azure-functions

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Azure Functions** environment variables.

## Install

```bash
npm install @secretdef/azure-functions secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/azure-functions';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `AZURE_FUNCTIONS_KEY` | Azure Functions host key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
