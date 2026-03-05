# @secretdef/tipalti

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Tipalti** environment variables.

## Install

```bash
npm install @secretdef/tipalti secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/tipalti';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TIPALTI_API_KEY` | Tipalti API key | Yes |
| `TIPALTI_PAYER_NAME` | Tipalti payer name | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
