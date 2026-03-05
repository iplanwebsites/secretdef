# @secretdef/clickhouse

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **ClickHouse** environment variables.

## Install

```bash
npm install @secretdef/clickhouse secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/clickhouse';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CLICKHOUSE_HOST` | ClickHouse host | Yes |
| `CLICKHOUSE_USER` | ClickHouse username | Yes |
| `CLICKHOUSE_PASSWORD` | ClickHouse password | Yes |
| `CLICKHOUSE_DATABASE` | ClickHouse database name | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
