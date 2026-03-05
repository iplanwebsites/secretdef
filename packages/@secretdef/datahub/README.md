# @secretdef/datahub

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **DataHub** environment variables.

## Install

```bash
npm install @secretdef/datahub secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/datahub';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DATAHUB_GMS_TOKEN` | DataHub GMS auth token | Yes |
| `DATAHUB_GMS_URL` | DataHub GMS server URL | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
