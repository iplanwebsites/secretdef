# @secretdef/endor-labs

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Endor Labs** environment variables.

## Install

```bash
npm install @secretdef/endor-labs secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/endor-labs';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ENDOR_API_KEY` | Endor Labs API key | Yes |
| `ENDOR_NAMESPACE` | Endor Labs namespace | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
