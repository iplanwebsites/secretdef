# @secretdef/tenderly

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Tenderly** environment variables.

## Install

```bash
npm install @secretdef/tenderly secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/tenderly';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TENDERLY_ACCESS_KEY` | Tenderly access key | Yes |
| `TENDERLY_ACCOUNT_SLUG` | Tenderly account slug | No |
| `TENDERLY_PROJECT_SLUG` | Tenderly project slug | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
