# @secretdef/census-data

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Census (Reverse ETL)** environment variables.

## Install

```bash
npm install @secretdef/census-data secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/census-data';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CENSUS_SECRET_TOKEN` | Census API secret token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
