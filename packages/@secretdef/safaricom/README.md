# @secretdef/safaricom

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Safaricom M-Pesa** environment variables.

## Install

```bash
npm install @secretdef/safaricom secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/safaricom';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MPESA_CONSUMER_KEY` | M-Pesa consumer key | Yes |
| `MPESA_CONSUMER_SECRET` | M-Pesa consumer secret | Yes |
| `MPESA_PASSKEY` | M-Pesa passkey | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
