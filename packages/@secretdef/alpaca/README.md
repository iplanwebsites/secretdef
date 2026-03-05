# @secretdef/alpaca

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Alpaca** environment variables.

## Install

```bash
npm install @secretdef/alpaca secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/alpaca';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ALPACA_API_KEY_ID` | Alpaca API key ID | Yes |
| `ALPACA_SECRET_KEY` | Alpaca secret key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
