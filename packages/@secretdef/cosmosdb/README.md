# @secretdef/cosmosdb

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Azure Cosmos DB** environment variables.

## Install

```bash
npm install @secretdef/cosmosdb secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/cosmosdb';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `COSMOS_DB_ENDPOINT` | Cosmos DB endpoint URL | Yes |
| `COSMOS_DB_KEY` | Cosmos DB access key | Yes |
| `COSMOS_DB_DATABASE_ID` | Cosmos DB database ID | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
