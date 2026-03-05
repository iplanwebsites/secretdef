# @secretdef/formbricks

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Formbricks** environment variables.

## Install

```bash
npm install @secretdef/formbricks secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/formbricks';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `FORMBRICKS_API_KEY` | Formbricks API key | Yes |
| `FORMBRICKS_ENVIRONMENT_ID` | Formbricks environment ID | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
