# @secretdef/slack-webhook

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Slack Webhooks** environment variables.

## Install

```bash
npm install @secretdef/slack-webhook secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/slack-webhook';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SLACK_WEBHOOK_URL` | Slack incoming webhook URL | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
