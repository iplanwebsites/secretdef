# @secretdef/dagster-cloud

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Dagster Cloud** environment variables.

## Install

```bash
npm install @secretdef/dagster-cloud secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/dagster-cloud';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DAGSTER_CLOUD_API_TOKEN` | Dagster Cloud API token | Yes |
| `DAGSTER_CLOUD_URL` | Dagster Cloud URL | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
