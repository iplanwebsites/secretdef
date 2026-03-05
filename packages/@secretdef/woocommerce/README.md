# @secretdef/woocommerce

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **WooCommerce** environment variables.

## Install

```bash
npm install @secretdef/woocommerce secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/woocommerce';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `WOOCOMMERCE_URL` | WooCommerce store URL | Yes |
| `WOOCOMMERCE_KEY` | WooCommerce consumer key | Yes |
| `WOOCOMMERCE_SECRET` | WooCommerce consumer secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
