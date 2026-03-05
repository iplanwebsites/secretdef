# @secretdef/neon-serverless

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Neon Serverless** environment variables.

## Install

```bash
npm install @secretdef/neon-serverless secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/neon-serverless';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `NEON_DATABASE_URL` | Neon serverless connection string | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
