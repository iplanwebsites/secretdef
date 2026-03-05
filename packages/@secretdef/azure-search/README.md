# @secretdef/azure-search

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Azure AI Search** environment variables.

## Install

```bash
npm install @secretdef/azure-search secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/azure-search';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `AZURE_SEARCH_ENDPOINT` | Azure AI Search endpoint | Yes |
| `AZURE_SEARCH_KEY` | Azure AI Search admin key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
