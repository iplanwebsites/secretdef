# @secretdef/scalr

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Scalr** environment variables.

## Install

```bash
npm install @secretdef/scalr secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/scalr';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SCALR_TOKEN` | Scalr Terraform API token | Yes |
| `SCALR_HOSTNAME` | Scalr hostname | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
