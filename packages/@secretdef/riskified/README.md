# @secretdef/riskified

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Riskified** environment variables.

## Install

```bash
npm install @secretdef/riskified secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/riskified';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `RISKIFIED_SHOP_DOMAIN` | Riskified shop domain | Yes |
| `RISKIFIED_AUTH_TOKEN` | Riskified auth token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
