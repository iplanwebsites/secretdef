# @secretdef/surrealdb

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **SurrealDB** environment variables.

## Install

```bash
npm install @secretdef/surrealdb secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/surrealdb';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SURREAL_URL` | SurrealDB URL | Yes |
| `SURREAL_USER` | SurrealDB username | Yes |
| `SURREAL_PASS` | SurrealDB password | Yes |
| `SURREAL_NS` | SurrealDB namespace | No |
| `SURREAL_DB` | SurrealDB database | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
