# @secretdef/fondy

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Fondy** environment variables.

## Install

```bash
npm install @secretdef/fondy secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/fondy';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `FONDY_MERCHANT_ID` | Fondy merchant ID | Yes |
| `FONDY_PAYMENT_KEY` | Fondy payment key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
