# @secretdef/chargify

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Chargify/Maxio** environment variables.

## Install

```bash
npm install @secretdef/chargify secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/chargify';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CHARGIFY_API_KEY` | Chargify API key | Yes |
| `CHARGIFY_SUBDOMAIN` | Chargify subdomain | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
