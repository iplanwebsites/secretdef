# @secretdef/bigcommerce

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **BigCommerce** environment variables.

## Install

```bash
npm install @secretdef/bigcommerce secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/bigcommerce';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BIGCOMMERCE_STORE_HASH` | BigCommerce store hash | Yes |
| `BIGCOMMERCE_ACCESS_TOKEN` | BigCommerce access token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
