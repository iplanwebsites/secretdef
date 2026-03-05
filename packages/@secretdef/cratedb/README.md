# @secretdef/cratedb

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **CrateDB** environment variables.

## Install

```bash
npm install @secretdef/cratedb secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/cratedb';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CRATEDB_HOST` | CrateDB host | Yes |
| `CRATEDB_USER` | CrateDB username | Yes |
| `CRATEDB_PASSWORD` | CrateDB password | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
