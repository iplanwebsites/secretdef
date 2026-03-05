# @secretdef/trieve

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Trieve** environment variables.

## Install

```bash
npm install @secretdef/trieve secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/trieve';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TRIEVE_API_KEY` | Trieve API key | Yes |
| `TRIEVE_DATASET_ID` | Trieve dataset ID | Yes |
| `TRIEVE_ORG_ID` | Trieve organization ID | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
