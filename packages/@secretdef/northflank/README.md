# @secretdef/northflank

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Northflank** environment variables.

## Install

```bash
npm install @secretdef/northflank secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/northflank';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `NORTHFLANK_API_KEY` | Northflank API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
