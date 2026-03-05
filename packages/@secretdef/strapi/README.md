# @secretdef/strapi

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Strapi** environment variables.

## Install

```bash
npm install @secretdef/strapi secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/strapi';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `STRAPI_API_TOKEN` | Strapi API token | Yes |
| `STRAPI_URL` | Strapi instance URL | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
