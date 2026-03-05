# @secretdef/quickbase

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Quickbase** environment variables.

## Install

```bash
npm install @secretdef/quickbase secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/quickbase';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `QUICKBASE_USER_TOKEN` | Quickbase user token | Yes |
| `QUICKBASE_REALM` | Quickbase realm hostname | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
