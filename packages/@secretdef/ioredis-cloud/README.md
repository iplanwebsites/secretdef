# @secretdef/ioredis-cloud

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Redis Cloud (ioredis)** environment variables.

## Install

```bash
npm install @secretdef/ioredis-cloud secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/ioredis-cloud';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `REDIS_CLOUD_URL` | Redis Cloud connection URL | Yes |
| `REDIS_CLOUD_PASSWORD` | Redis Cloud password | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
