# @secretdef/coingecko

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **CoinGecko** environment variables.

## Install

```bash
npm install @secretdef/coingecko secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/coingecko';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `COINGECKO_API_KEY` | CoinGecko Pro API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
