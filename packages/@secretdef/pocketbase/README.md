# @secretdef/pocketbase

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **PocketBase** environment variables.

## Install

```bash
npm install @secretdef/pocketbase secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/pocketbase';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `POCKETBASE_URL` | PocketBase URL | Yes |
| `POCKETBASE_ADMIN_EMAIL` | PocketBase admin email | No |
| `POCKETBASE_ADMIN_PASSWORD` | PocketBase admin password | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
