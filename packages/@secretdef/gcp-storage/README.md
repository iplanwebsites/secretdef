# @secretdef/gcp-storage

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Google Cloud Storage** environment variables.

## Install

```bash
npm install @secretdef/gcp-storage secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/gcp-storage';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `GCS_BUCKET_NAME` | Google Cloud Storage bucket name | Yes |
| `GCS_PROJECT_ID` | GCP project ID for Cloud Storage | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
