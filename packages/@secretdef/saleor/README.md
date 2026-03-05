# @secretdef/saleor

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Saleor** environment variables.

## Install

```bash
npm install @secretdef/saleor secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/saleor';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SALEOR_API_URL` | Saleor GraphQL API URL | Yes |
| `SALEOR_APP_TOKEN` | Saleor app token | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
