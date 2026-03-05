# @secretdef/harvest

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Harvest** environment variables.

## Install

```bash
npm install @secretdef/harvest secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/harvest';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `HARVEST_ACCOUNT_ID` | Harvest account ID | Yes |
| `HARVEST_ACCESS_TOKEN` | Harvest personal access token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
