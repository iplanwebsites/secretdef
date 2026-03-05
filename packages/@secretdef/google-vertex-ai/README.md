# @secretdef/google-vertex-ai

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Google Vertex AI** environment variables.

## Install

```bash
npm install @secretdef/google-vertex-ai secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/google-vertex-ai';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `GOOGLE_CLOUD_PROJECT` | Google Cloud project ID | Yes |
| `GOOGLE_APPLICATION_CREDENTIALS` | Path to service account JSON key file | No |
| `VERTEX_AI_LOCATION` | Vertex AI region (e.g. us-central1) | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
