# @secretdef/convertapi

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **ConvertAPI** environment variables.

## Install

```bash
npm install @secretdef/convertapi secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/convertapi';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CONVERTAPI_SECRET` | ConvertAPI secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
