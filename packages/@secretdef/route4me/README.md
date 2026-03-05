# @secretdef/route4me

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Route4Me** environment variables.

## Install

```bash
npm install @secretdef/route4me secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/route4me';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ROUTE4ME_API_KEY` | Route4Me API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
