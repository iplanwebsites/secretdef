# @secretdef/yugabyte

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **YugabyteDB** environment variables.

## Install

```bash
npm install @secretdef/yugabyte secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/yugabyte';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `YUGABYTE_HOST` | YugabyteDB host | Yes |
| `YUGABYTE_USER` | YugabyteDB username | Yes |
| `YUGABYTE_PASSWORD` | YugabyteDB password | Yes |
| `YUGABYTE_DATABASE` | YugabyteDB database name | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
