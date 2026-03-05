# @secretdef/gotify

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Gotify** environment variables.

## Install

```bash
npm install @secretdef/gotify secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/gotify';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `GOTIFY_URL` | Gotify server URL | Yes |
| `GOTIFY_TOKEN` | Gotify application token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
