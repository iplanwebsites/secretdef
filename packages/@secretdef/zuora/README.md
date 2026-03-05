# @secretdef/zuora

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Zuora** environment variables.

## Install

```bash
npm install @secretdef/zuora secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/zuora';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ZUORA_CLIENT_ID` | Zuora OAuth client ID | Yes |
| `ZUORA_CLIENT_SECRET` | Zuora OAuth client secret | Yes |
| `ZUORA_BASE_URL` | Zuora API base URL | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
