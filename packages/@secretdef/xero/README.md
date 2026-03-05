# @secretdef/xero

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Xero** environment variables.

## Install

```bash
npm install @secretdef/xero secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/xero';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `XERO_CLIENT_ID` | Xero OAuth client ID | Yes |
| `XERO_CLIENT_SECRET` | Xero OAuth client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
