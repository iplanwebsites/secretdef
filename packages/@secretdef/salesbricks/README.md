# @secretdef/salesbricks

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **SalesBricks** environment variables.

## Install

```bash
npm install @secretdef/salesbricks secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/salesbricks';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SALESBRICKS_API_KEY` | SalesBricks API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
