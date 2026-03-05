# @secretdef/coolify

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Coolify** environment variables.

## Install

```bash
npm install @secretdef/coolify secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/coolify';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `COOLIFY_API_KEY` | Coolify API key | Yes |
| `COOLIFY_API_URL` | Coolify API URL | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
