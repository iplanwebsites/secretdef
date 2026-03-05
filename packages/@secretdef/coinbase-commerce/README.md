# @secretdef/coinbase-commerce

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Coinbase Commerce** environment variables.

## Install

```bash
npm install @secretdef/coinbase-commerce secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/coinbase-commerce';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `COINBASE_COMMERCE_API_KEY` | Coinbase Commerce API key | Yes |
| `COINBASE_COMMERCE_WEBHOOK_SECRET` | Coinbase Commerce webhook secret | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
