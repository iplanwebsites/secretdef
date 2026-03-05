# @secretdef/infobip

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Infobip** environment variables.

## Install

```bash
npm install @secretdef/infobip secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/infobip';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `INFOBIP_API_KEY` | Infobip API key | Yes |
| `INFOBIP_BASE_URL` | Infobip base URL | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
