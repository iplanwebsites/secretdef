# @secretdef/prestashop

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **PrestaShop** environment variables.

## Install

```bash
npm install @secretdef/prestashop secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/prestashop';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PRESTASHOP_API_KEY` | PrestaShop webservice API key | Yes |
| `PRESTASHOP_API_URL` | PrestaShop store URL | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
