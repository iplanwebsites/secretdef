# @secretdef/payhere

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **PayHere** environment variables.

## Install

```bash
npm install @secretdef/payhere secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/payhere';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PAYHERE_MERCHANT_ID` | PayHere merchant ID | Yes |
| `PAYHERE_MERCHANT_SECRET` | PayHere merchant secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
