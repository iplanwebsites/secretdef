# @secretdef/skyflow

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Skyflow** environment variables.

## Install

```bash
npm install @secretdef/skyflow secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/skyflow';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SKYFLOW_SERVICE_ACCOUNT` | Skyflow service account credentials JSON | Yes |
| `SKYFLOW_VAULT_ID` | Skyflow vault ID | Yes |
| `SKYFLOW_VAULT_URL` | Skyflow vault URL | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
