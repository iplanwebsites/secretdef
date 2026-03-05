# @secretdef/zoho-crm

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Zoho CRM** environment variables.

## Install

```bash
npm install @secretdef/zoho-crm secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/zoho-crm';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ZOHO_CLIENT_ID` | Zoho OAuth client ID | Yes |
| `ZOHO_CLIENT_SECRET` | Zoho OAuth client secret | Yes |
| `ZOHO_REFRESH_TOKEN` | Zoho OAuth refresh token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
