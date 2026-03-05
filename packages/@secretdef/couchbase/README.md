# @secretdef/couchbase

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Couchbase** environment variables.

## Install

```bash
npm install @secretdef/couchbase secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/couchbase';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `COUCHBASE_CONNECTION_STRING` | Couchbase connection string | Yes |
| `COUCHBASE_USERNAME` | Couchbase username | Yes |
| `COUCHBASE_PASSWORD` | Couchbase password | Yes |
| `COUCHBASE_BUCKET` | Couchbase bucket name | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
