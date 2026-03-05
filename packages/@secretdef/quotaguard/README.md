# @secretdef/quotaguard

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **QuotaGuard** environment variables.

## Install

```bash
npm install @secretdef/quotaguard secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/quotaguard';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `QUOTAGUARD_URL` | QuotaGuard proxy URL | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
