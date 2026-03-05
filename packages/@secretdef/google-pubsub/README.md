# @secretdef/google-pubsub

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Google Pub/Sub** environment variables.

## Install

```bash
npm install @secretdef/google-pubsub secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/google-pubsub';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `GOOGLE_CLOUD_PROJECT` | Google Cloud project ID for Pub/Sub | Yes |
| `GOOGLE_APPLICATION_CREDENTIALS` | Path to GCP service account key | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
