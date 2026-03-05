# @secretdef/snowflake

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Snowflake** environment variables.

## Install

```bash
npm install @secretdef/snowflake secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/snowflake';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SNOWFLAKE_ACCOUNT` | Snowflake account identifier | Yes |
| `SNOWFLAKE_USER` | Snowflake username | Yes |
| `SNOWFLAKE_PASSWORD` | Snowflake password | Yes |
| `SNOWFLAKE_WAREHOUSE` | Snowflake warehouse name | No |
| `SNOWFLAKE_DATABASE` | Snowflake database name | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
