# @secretdef/checkmarx

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Checkmarx** environment variables.

## Install

```bash
npm install @secretdef/checkmarx secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/checkmarx';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CHECKMARX_BASE_URL` | Checkmarx base URL | Yes |
| `CHECKMARX_CLIENT_ID` | Checkmarx client ID | Yes |
| `CHECKMARX_CLIENT_SECRET` | Checkmarx client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
