# @secretdef/edgedb

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **EdgeDB** environment variables.

## Install

```bash
npm install @secretdef/edgedb secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/edgedb';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `EDGEDB_DSN` | EdgeDB connection DSN | Yes |
| `EDGEDB_SECRET_KEY` | EdgeDB Cloud secret key | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
