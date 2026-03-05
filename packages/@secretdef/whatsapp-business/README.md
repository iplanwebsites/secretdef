# @secretdef/whatsapp-business

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **WhatsApp Business** environment variables.

## Install

```bash
npm install @secretdef/whatsapp-business secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/whatsapp-business';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `WHATSAPP_ACCESS_TOKEN` | WhatsApp Business access token | Yes |
| `WHATSAPP_PHONE_NUMBER_ID` | WhatsApp phone number ID | Yes |
| `WHATSAPP_BUSINESS_ACCOUNT_ID` | WhatsApp Business account ID | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
