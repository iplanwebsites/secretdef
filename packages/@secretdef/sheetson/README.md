# @secretdef/sheetson

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Sheetson** environment variables.

## Install

```bash
npm install @secretdef/sheetson secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/sheetson';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SHEETSON_API_KEY` | Sheetson API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
