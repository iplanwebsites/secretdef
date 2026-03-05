# @secretdef/ghost

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Ghost** environment variables.

## Install

```bash
npm install @secretdef/ghost secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/ghost';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `GHOST_API_URL` | Ghost API URL | Yes |
| `GHOST_CONTENT_API_KEY` | Ghost Content API key | Yes |
| `GHOST_ADMIN_API_KEY` | Ghost Admin API key | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
