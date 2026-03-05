# @secretdef/forte

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Forte** environment variables.

## Install

```bash
npm install @secretdef/forte secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/forte';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `FORTE_API_ACCESS_ID` | Forte API access ID | Yes |
| `FORTE_SECURE_TRANSACTION_KEY` | Forte secure transaction key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
