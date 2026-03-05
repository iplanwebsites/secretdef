# @secretdef/quickbooks

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **QuickBooks** environment variables.

## Install

```bash
npm install @secretdef/quickbooks secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/quickbooks';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `QUICKBOOKS_CLIENT_ID` | QuickBooks OAuth client ID | Yes |
| `QUICKBOOKS_CLIENT_SECRET` | QuickBooks OAuth client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
