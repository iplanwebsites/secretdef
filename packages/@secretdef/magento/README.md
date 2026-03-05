# @secretdef/magento

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Magento** environment variables.

## Install

```bash
npm install @secretdef/magento secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/magento';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MAGENTO_BASE_URL` | Magento store base URL | Yes |
| `MAGENTO_ACCESS_TOKEN` | Magento integration access token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
