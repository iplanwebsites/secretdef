# @secretdef/coinapi

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **CoinAPI** environment variables.

## Install

```bash
npm install @secretdef/coinapi secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/coinapi';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `COINAPI_KEY` | CoinAPI key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
