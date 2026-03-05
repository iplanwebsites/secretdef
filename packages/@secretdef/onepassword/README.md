# @secretdef/onepassword

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **1Password** environment variables.

## Install

```bash
npm install @secretdef/onepassword secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/onepassword';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `OP_SERVICE_ACCOUNT_TOKEN` | 1Password service account token | Yes |
| `OP_CONNECT_HOST` | 1Password Connect server URL | No |
| `OP_CONNECT_TOKEN` | 1Password Connect token | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
