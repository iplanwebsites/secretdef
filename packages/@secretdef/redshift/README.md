# @secretdef/redshift

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **AWS Redshift** environment variables.

## Install

```bash
npm install @secretdef/redshift secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/redshift';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `REDSHIFT_HOST` | Redshift cluster endpoint | Yes |
| `REDSHIFT_USER` | Redshift username | Yes |
| `REDSHIFT_PASSWORD` | Redshift password | Yes |
| `REDSHIFT_DATABASE` | Redshift database name | No |
| `REDSHIFT_PORT` | Redshift port | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
