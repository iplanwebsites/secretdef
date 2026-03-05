# @secretdef/seatable

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **SeaTable** environment variables.

## Install

```bash
npm install @secretdef/seatable secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/seatable';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SEATABLE_API_TOKEN` | SeaTable API token | Yes |
| `SEATABLE_URL` | SeaTable server URL | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
