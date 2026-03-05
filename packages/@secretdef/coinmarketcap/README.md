# @secretdef/coinmarketcap

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **CoinMarketCap** environment variables.

## Install

```bash
npm install @secretdef/coinmarketcap secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/coinmarketcap';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `COINMARKETCAP_API_KEY` | CoinMarketCap API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
