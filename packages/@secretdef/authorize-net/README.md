# @secretdef/authorize-net

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Authorize.net** environment variables.

## Install

```bash
npm install @secretdef/authorize-net secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/authorize-net';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `AUTHORIZE_NET_API_LOGIN_ID` | Authorize.net API login ID | Yes |
| `AUTHORIZE_NET_TRANSACTION_KEY` | Authorize.net transaction key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
