# @secretdef/leanix

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **LeanIX** environment variables.

## Install

```bash
npm install @secretdef/leanix secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/leanix';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `LEANIX_API_TOKEN` | LeanIX API token | Yes |
| `LEANIX_SUBDOMAIN` | LeanIX subdomain | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
