# @secretdef/depot

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Depot** environment variables.

## Install

```bash
npm install @secretdef/depot secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/depot';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DEPOT_TOKEN` | Depot build token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
