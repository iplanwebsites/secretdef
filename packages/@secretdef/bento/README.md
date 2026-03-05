# @secretdef/bento

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Bento** environment variables.

## Install

```bash
npm install @secretdef/bento secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/bento';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BENTO_SITE_UUID` | Bento site UUID | Yes |
| `BENTO_SECRET_KEY` | Bento secret key | Yes |
| `BENTO_PUBLISHABLE_KEY` | Bento publishable key | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
