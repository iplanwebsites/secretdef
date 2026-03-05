# @secretdef/last9

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Last9** environment variables.

## Install

```bash
npm install @secretdef/last9 secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/last9';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `LAST9_API_KEY` | Last9 API key | Yes |
| `LAST9_CLUSTER_URL` | Last9 cluster URL | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
