# @secretdef/nile

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Nile** environment variables.

## Install

```bash
npm install @secretdef/nile secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/nile';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `NILE_API_KEY` | Nile API key | Yes |
| `NILE_WORKSPACE_SLUG` | Nile workspace slug | Yes |
| `NILE_DATABASE_NAME` | Nile database name | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
