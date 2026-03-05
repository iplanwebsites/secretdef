# @secretdef/etsy

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Etsy** environment variables.

## Install

```bash
npm install @secretdef/etsy secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/etsy';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ETSY_API_KEY` | Etsy API key | Yes |
| `ETSY_ACCESS_TOKEN` | Etsy OAuth access token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
