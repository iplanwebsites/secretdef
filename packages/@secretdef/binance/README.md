# @secretdef/binance

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Binance** environment variables.

## Install

```bash
npm install @secretdef/binance secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/binance';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BINANCE_API_KEY` | Binance API key | Yes |
| `BINANCE_API_SECRET` | Binance API secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
