# @secretdef/vercel-postgres

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Vercel Postgres** environment variables.

## Install

```bash
npm install @secretdef/vercel-postgres secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/vercel-postgres';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `POSTGRES_URL` | Vercel Postgres connection URL | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
