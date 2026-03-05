# @secretdef/minio

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **MinIO** environment variables.

## Install

```bash
npm install @secretdef/minio secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/minio';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MINIO_ENDPOINT` | MinIO endpoint URL | Yes |
| `MINIO_ACCESS_KEY` | MinIO access key | Yes |
| `MINIO_SECRET_KEY` | MinIO secret key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
