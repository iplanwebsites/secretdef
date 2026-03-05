# @secretdef/nuvei

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Nuvei** environment variables.

## Install

```bash
npm install @secretdef/nuvei secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/nuvei';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `NUVEI_MERCHANT_ID` | Nuvei merchant ID | Yes |
| `NUVEI_MERCHANT_SITE_ID` | Nuvei merchant site ID | Yes |
| `NUVEI_SECRET_KEY` | Nuvei secret key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
