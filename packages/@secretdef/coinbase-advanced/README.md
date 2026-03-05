# @secretdef/coinbase-advanced

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Coinbase Advanced Trade** environment variables.

## Install

```bash
npm install @secretdef/coinbase-advanced secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/coinbase-advanced';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `COINBASE_API_KEY` | Coinbase API key | Yes |
| `COINBASE_API_SECRET` | Coinbase API secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
