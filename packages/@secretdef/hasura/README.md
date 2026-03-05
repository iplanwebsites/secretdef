# @secretdef/hasura

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Hasura** environment variables.

## Install

```bash
npm install @secretdef/hasura secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/hasura';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `HASURA_GRAPHQL_ADMIN_SECRET` | Hasura admin secret | Yes |
| `HASURA_GRAPHQL_ENDPOINT` | Hasura GraphQL endpoint | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
