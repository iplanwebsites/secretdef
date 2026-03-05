# @secretdef/prisma-accelerate

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Prisma Accelerate** environment variables.

## Install

```bash
npm install @secretdef/prisma-accelerate secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/prisma-accelerate';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PRISMA_ACCELERATE_API_KEY` | Prisma Accelerate connection pooler API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
