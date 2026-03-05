# @secretdef/prisma-cloud

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Prisma Cloud** environment variables.

## Install

```bash
npm install @secretdef/prisma-cloud secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/prisma-cloud';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PRISMA_CLOUD_ACCESS_KEY` | Prisma Cloud access key | Yes |
| `PRISMA_CLOUD_SECRET_KEY` | Prisma Cloud secret key | Yes |
| `PRISMA_CLOUD_API_URL` | Prisma Cloud API URL | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
