# @secretdef/worldpay

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Worldpay** environment variables.

## Install

```bash
npm install @secretdef/worldpay secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/worldpay';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `WORLDPAY_SERVICE_KEY` | Worldpay service key | Yes |
| `WORLDPAY_CLIENT_KEY` | Worldpay client key | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
