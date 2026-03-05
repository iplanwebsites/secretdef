# @secretdef/mailersend

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **MailerSend** environment variables.

## Install

```bash
npm install @secretdef/mailersend secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/mailersend';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MAILERSEND_API_TOKEN` | MailerSend API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
