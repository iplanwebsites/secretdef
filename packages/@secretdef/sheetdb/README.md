# @secretdef/sheetdb

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **SheetDB** environment variables.

## Install

```bash
npm install @secretdef/sheetdb secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/sheetdb';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SHEETDB_API_ID` | SheetDB API ID | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
