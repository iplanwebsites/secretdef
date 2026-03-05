# @secretdef/azure-blob

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Azure Blob Storage** environment variables.

## Install

```bash
npm install @secretdef/azure-blob secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/azure-blob';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `AZURE_STORAGE_CONNECTION_STRING` | Azure Blob Storage connection string | Yes |
| `AZURE_STORAGE_ACCOUNT_NAME` | Azure storage account name | No |
| `AZURE_STORAGE_ACCOUNT_KEY` | Azure storage account key | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
