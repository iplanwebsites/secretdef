# @secretdef/opsramp

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **OpsRamp** environment variables.

## Install

```bash
npm install @secretdef/opsramp secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/opsramp';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `OPSRAMP_API_KEY` | OpsRamp API key | Yes |
| `OPSRAMP_API_SECRET` | OpsRamp API secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
