# @secretdef/databricks

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Databricks** environment variables.

## Install

```bash
npm install @secretdef/databricks secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/databricks';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABRICKS_HOST` | Databricks workspace URL | Yes |
| `DATABRICKS_TOKEN` | Databricks personal access token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
