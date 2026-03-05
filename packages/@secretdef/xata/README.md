# @secretdef/xata

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Xata** environment variables.

## Install

```bash
npm install @secretdef/xata secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/xata';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `XATA_API_KEY` | Xata API key | Yes |
| `XATA_BRANCH` | Xata branch name | No |
| `XATA_DATABASE_URL` | Xata database URL | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
