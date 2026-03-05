# @secretdef/elastic-cloud

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Elastic Cloud** environment variables.

## Install

```bash
npm install @secretdef/elastic-cloud secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/elastic-cloud';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ELASTIC_CLOUD_ID` | Elastic Cloud deployment ID | Yes |
| `ELASTIC_API_KEY` | Elastic API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
