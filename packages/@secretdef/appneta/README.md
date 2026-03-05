# @secretdef/appneta

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **AppNeta** environment variables.

## Install

```bash
npm install @secretdef/appneta secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/appneta';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `APPNETA_API_KEY` | AppNeta API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
