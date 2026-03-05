# @secretdef/zoho-mail

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Zoho Mail** environment variables.

## Install

```bash
npm install @secretdef/zoho-mail secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/zoho-mail';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ZOHO_MAIL_CLIENT_ID` | Zoho Mail OAuth client ID | Yes |
| `ZOHO_MAIL_CLIENT_SECRET` | Zoho Mail OAuth client secret | Yes |
| `ZOHO_MAIL_REFRESH_TOKEN` | Zoho Mail OAuth refresh token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
