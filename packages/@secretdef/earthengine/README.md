# @secretdef/earthengine

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Google Earth Engine** environment variables.

## Install

```bash
npm install @secretdef/earthengine secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/earthengine';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `EE_SERVICE_ACCOUNT_EMAIL` | Earth Engine service account email | Yes |
| `EE_PRIVATE_KEY` | Earth Engine service account private key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
