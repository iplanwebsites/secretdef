# @secretdef/mailjet

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Mailjet** environment variables.

## Install

```bash
npm install @secretdef/mailjet secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/mailjet';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MAILJET_API_KEY` | Mailjet API key | Yes |
| `MAILJET_API_SECRET` | Mailjet API secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
