# @secretdef/sinch

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Sinch** environment variables.

## Install

```bash
npm install @secretdef/sinch secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/sinch';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SINCH_SERVICE_PLAN_ID` | Sinch service plan ID | Yes |
| `SINCH_API_TOKEN` | Sinch API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
