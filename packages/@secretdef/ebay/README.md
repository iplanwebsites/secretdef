# @secretdef/ebay

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **eBay** environment variables.

## Install

```bash
npm install @secretdef/ebay secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/ebay';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `EBAY_APP_ID` | eBay application ID (client ID) | Yes |
| `EBAY_CERT_ID` | eBay certificate ID (client secret) | Yes |
| `EBAY_AUTH_TOKEN` | eBay OAuth user token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
