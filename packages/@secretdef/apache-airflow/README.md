# @secretdef/apache-airflow

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Apache Airflow** environment variables.

## Install

```bash
npm install @secretdef/apache-airflow secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/apache-airflow';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `AIRFLOW__CORE__FERNET_KEY` | Airflow Fernet encryption key | Yes |
| `AIRFLOW__DATABASE__SQL_ALCHEMY_CONN` | Airflow database connection string | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
