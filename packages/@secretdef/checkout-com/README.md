# @secretdef/checkout-com

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Checkout.com** environment variables.

## Install

```bash
npm install @secretdef/checkout-com secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/checkout-com';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CHECKOUT_SECRET_KEY` | Checkout.com secret key | Yes |
| `CHECKOUT_PUBLIC_KEY` | Checkout.com public key | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
