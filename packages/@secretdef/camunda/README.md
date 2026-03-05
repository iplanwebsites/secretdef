# @secretdef/camunda

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Camunda** environment variables.

## Install

```bash
npm install @secretdef/camunda secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/camunda';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CAMUNDA_CLIENT_ID` | Camunda Cloud client ID | Yes |
| `CAMUNDA_CLIENT_SECRET` | Camunda Cloud client secret | Yes |
| `CAMUNDA_CLUSTER_ID` | Camunda cluster ID | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
