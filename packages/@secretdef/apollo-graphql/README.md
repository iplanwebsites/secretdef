# @secretdef/apollo-graphql

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Apollo GraphQL** environment variables.

## Install

```bash
npm install @secretdef/apollo-graphql secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/apollo-graphql';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `APOLLO_KEY` | Apollo Studio API key | Yes |
| `APOLLO_GRAPH_REF` | Apollo graph reference | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
