# @secretdef/exchangerate-api

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **ExchangeRate-API** environment variables.

## Install

```bash
npm install @secretdef/exchangerate-api secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/exchangerate-api';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `EXCHANGERATE_API_KEY` | ExchangeRate-API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
