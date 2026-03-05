# @secretdef/tines

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Tines** environment variables.

## Install

```bash
npm install @secretdef/tines secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/tines';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TINES_API_KEY` | Tines API key | Yes |
| `TINES_TENANT_URL` | Tines tenant URL | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
