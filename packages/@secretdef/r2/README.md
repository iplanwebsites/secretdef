# @secretdef/r2

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Cloudflare R2** environment variables.

## Install

```bash
npm install @secretdef/r2 secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/r2';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `R2_ACCOUNT_ID` | Cloudflare account ID for R2 | Yes |
| `R2_ACCESS_KEY_ID` | R2 access key ID | Yes |
| `R2_SECRET_ACCESS_KEY` | R2 secret access key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
