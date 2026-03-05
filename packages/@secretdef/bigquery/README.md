# @secretdef/bigquery

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Google BigQuery** environment variables.

## Install

```bash
npm install @secretdef/bigquery secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/bigquery';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BIGQUERY_PROJECT_ID` | Google Cloud project ID for BigQuery | Yes |
| `GOOGLE_APPLICATION_CREDENTIALS` | Path to service account JSON key | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
