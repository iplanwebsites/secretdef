# @secretdef/zitadel

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **ZITADEL** environment variables.

## Install

```bash
npm install @secretdef/zitadel secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/zitadel';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ZITADEL_DOMAIN` | ZITADEL instance domain | Yes |
| `ZITADEL_API_KEY` | ZITADEL API key | No |
| `ZITADEL_SERVICE_USER_TOKEN` | ZITADEL service user token | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
