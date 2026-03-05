# @secretdef/superset

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Apache Superset** environment variables.

## Install

```bash
npm install @secretdef/superset secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/superset';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SUPERSET_SECRET_KEY` | Superset Flask secret key | Yes |
| `SUPERSET_URL` | Superset instance URL | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
