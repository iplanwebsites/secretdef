# @secretdef/ntfy

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **ntfy** environment variables.

## Install

```bash
npm install @secretdef/ntfy secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/ntfy';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `NTFY_URL` | ntfy server URL | Yes |
| `NTFY_TOKEN` | ntfy access token | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
