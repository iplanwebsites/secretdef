# @secretdef/middleware-io

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Middleware** environment variables.

## Install

```bash
npm install @secretdef/middleware-io secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/middleware-io';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MIDDLEWARE_API_KEY` | Middleware API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
