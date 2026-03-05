# @secretdef/abstract-api

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **AbstractAPI** environment variables.

## Install

```bash
npm install @secretdef/abstract-api secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/abstract-api';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ABSTRACTAPI_API_KEY` | AbstractAPI key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
