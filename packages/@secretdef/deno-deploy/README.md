# @secretdef/deno-deploy

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Deno Deploy** environment variables.

## Install

```bash
npm install @secretdef/deno-deploy secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/deno-deploy';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DENO_DEPLOY_TOKEN` | Deno Deploy access token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
