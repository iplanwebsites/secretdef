# @secretdef/hibob

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **HiBob** environment variables.

## Install

```bash
npm install @secretdef/hibob secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/hibob';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `HIBOB_SERVICE_USER_ID` | HiBob service user ID | Yes |
| `HIBOB_TOKEN` | HiBob API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
