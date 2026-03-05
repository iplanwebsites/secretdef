# @secretdef/azure-cosmos-nosql

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Azure Cosmos DB NoSQL** environment variables.

## Install

```bash
npm install @secretdef/azure-cosmos-nosql secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/azure-cosmos-nosql';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `AZURE_COSMOS_ENDPOINT` | Azure Cosmos DB endpoint | Yes |
| `AZURE_COSMOS_KEY` | Azure Cosmos DB key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
