# @secretdef/resend-webhook

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Resend Webhooks** environment variables.

## Install

```bash
npm install @secretdef/resend-webhook secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/resend-webhook';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_WEBHOOK_SECRET` | Resend webhook signing secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
