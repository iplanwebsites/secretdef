# @secretdef/repairshopr

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **RepairShopr** environment variables.

## Install

```bash
npm install @secretdef/repairshopr secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/repairshopr';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `REPAIRSHOPR_API_KEY` | RepairShopr API key | Yes |
| `REPAIRSHOPR_SUBDOMAIN` | RepairShopr subdomain | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
