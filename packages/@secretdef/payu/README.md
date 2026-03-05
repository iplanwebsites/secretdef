# @secretdef/payu

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **PayU** environment variables.

## Install

```bash
npm install @secretdef/payu secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/payu';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PAYU_MERCHANT_KEY` | PayU merchant key | Yes |
| `PAYU_MERCHANT_SALT` | PayU merchant salt | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
