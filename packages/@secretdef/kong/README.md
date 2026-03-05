# @secretdef/kong

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Kong** environment variables.

## Install

```bash
npm install @secretdef/kong secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/kong';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `KONG_ADMIN_TOKEN` | Kong admin API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
