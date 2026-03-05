# @secretdef/webhook-site

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Webhook.site** environment variables.

## Install

```bash
npm install @secretdef/webhook-site secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/webhook-site';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `WEBHOOK_SITE_TOKEN` | Webhook.site token/UUID | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
