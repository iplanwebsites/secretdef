# @secretdef/zerodha

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Zerodha Kite** environment variables.

## Install

```bash
npm install @secretdef/zerodha secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/zerodha';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `KITE_API_KEY` | Zerodha Kite Connect API key | Yes |
| `KITE_API_SECRET` | Zerodha Kite Connect API secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
