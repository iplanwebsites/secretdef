# @secretdef/order-desk

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Order Desk** environment variables.

## Install

```bash
npm install @secretdef/order-desk secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/order-desk';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ORDERDESK_STORE_ID` | Order Desk store ID | Yes |
| `ORDERDESK_API_KEY` | Order Desk API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
