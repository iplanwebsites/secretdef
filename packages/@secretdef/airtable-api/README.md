# @secretdef/airtable-api

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Airtable API** environment variables.

## Install

```bash
npm install @secretdef/airtable-api secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/airtable-api';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `AIRTABLE_PAT` | Airtable personal access token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
