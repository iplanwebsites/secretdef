# @secretdef/chargepoint

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **ChargePoint** environment variables.

## Install

```bash
npm install @secretdef/chargepoint secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/chargepoint';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CHARGEPOINT_API_KEY` | ChargePoint API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
