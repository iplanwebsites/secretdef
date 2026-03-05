# @secretdef/shopware

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Shopware** environment variables.

## Install

```bash
npm install @secretdef/shopware secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/shopware';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SHOPWARE_ACCESS_KEY` | Shopware API access key | Yes |
| `SHOPWARE_SECRET_KEY` | Shopware API secret key | Yes |
| `SHOPWARE_URL` | Shopware instance URL | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
