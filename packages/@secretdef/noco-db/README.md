# @secretdef/noco-db

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **NocoDB** environment variables.

## Install

```bash
npm install @secretdef/noco-db secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/noco-db';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `NOCODB_TOKEN` | NocoDB API token | Yes |
| `NOCODB_URL` | NocoDB instance URL | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
