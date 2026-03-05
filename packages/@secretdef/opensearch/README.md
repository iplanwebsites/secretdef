# @secretdef/opensearch

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **OpenSearch** environment variables.

## Install

```bash
npm install @secretdef/opensearch secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/opensearch';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENSEARCH_URL` | OpenSearch URL | Yes |
| `OPENSEARCH_USERNAME` | OpenSearch username | No |
| `OPENSEARCH_PASSWORD` | OpenSearch password | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
