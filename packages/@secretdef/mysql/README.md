# @secretdef/mysql

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **MySQL** environment variables.

## Install

```bash
npm install @secretdef/mysql secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/mysql';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MYSQL_HOST` | MySQL host | Yes |
| `MYSQL_USER` | MySQL username | Yes |
| `MYSQL_PASSWORD` | MySQL password | Yes |
| `MYSQL_DATABASE` | MySQL database name | No |
| `MYSQL_PORT` | MySQL port | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
