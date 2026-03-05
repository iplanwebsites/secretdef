# @secretdef/aserto

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Aserto** environment variables.

## Install

```bash
npm install @secretdef/aserto secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/aserto';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ASERTO_TENANT_ID` | Aserto tenant ID | Yes |
| `ASERTO_API_KEY` | Aserto API key | Yes |
| `ASERTO_AUTHORIZER_SERVICE_URL` | Aserto authorizer URL | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
