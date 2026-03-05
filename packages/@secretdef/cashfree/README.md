# @secretdef/cashfree

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Cashfree** environment variables.

## Install

```bash
npm install @secretdef/cashfree secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/cashfree';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CASHFREE_APP_ID` | Cashfree app ID | Yes |
| `CASHFREE_SECRET_KEY` | Cashfree secret key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
