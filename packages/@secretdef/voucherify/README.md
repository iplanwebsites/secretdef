# @secretdef/voucherify

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Voucherify** environment variables.

## Install

```bash
npm install @secretdef/voucherify secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/voucherify';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `VOUCHERIFY_APP_ID` | Voucherify app ID | Yes |
| `VOUCHERIFY_SECRET_KEY` | Voucherify secret key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
