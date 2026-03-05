# @secretdef/tidb-cloud

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **TiDB Cloud** environment variables.

## Install

```bash
npm install @secretdef/tidb-cloud secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/tidb-cloud';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TIDB_HOST` | TiDB Cloud host | Yes |
| `TIDB_USER` | TiDB Cloud username | Yes |
| `TIDB_PASSWORD` | TiDB Cloud password | Yes |
| `TIDB_DATABASE` | TiDB database name | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
