# @secretdef/dadata

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **DaData** environment variables.

## Install

```bash
npm install @secretdef/dadata secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/dadata';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DADATA_API_KEY` | DaData API key | Yes |
| `DADATA_SECRET_KEY` | DaData secret key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
