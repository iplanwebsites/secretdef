# @secretdef/datagrid

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **DataGrid** environment variables.

## Install

```bash
npm install @secretdef/datagrid secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/datagrid';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DATAGRID_API_KEY` | DataGrid API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
