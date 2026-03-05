# @secretdef/bunnynet

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Bunny.net** environment variables.

## Install

```bash
npm install @secretdef/bunnynet secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/bunnynet';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BUNNY_API_KEY` | Bunny.net API key | Yes |
| `BUNNY_STORAGE_ZONE_NAME` | Bunny.net storage zone name | No |
| `BUNNY_STORAGE_PASSWORD` | Bunny.net storage password | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
