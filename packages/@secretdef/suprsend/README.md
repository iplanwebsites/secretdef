# @secretdef/suprsend

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **SuprSend** environment variables.

## Install

```bash
npm install @secretdef/suprsend secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/suprsend';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SUPRSEND_WORKSPACE_KEY` | SuprSend workspace key | Yes |
| `SUPRSEND_WORKSPACE_SECRET` | SuprSend workspace secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
