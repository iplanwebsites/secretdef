# @secretdef/gitpod

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Gitpod** environment variables.

## Install

```bash
npm install @secretdef/gitpod secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/gitpod';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `GITPOD_TOKEN` | Gitpod API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
