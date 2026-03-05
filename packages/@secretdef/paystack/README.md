# @secretdef/paystack

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Paystack** environment variables.

## Install

```bash
npm install @secretdef/paystack secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/paystack';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PAYSTACK_SECRET_KEY` | Paystack secret key | Yes |
| `PAYSTACK_PUBLIC_KEY` | Paystack public key | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
