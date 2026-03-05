# @secretdef/paysafe

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Paysafe** environment variables.

## Install

```bash
npm install @secretdef/paysafe secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/paysafe';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PAYSAFE_API_KEY` | Paysafe API key | Yes |
| `PAYSAFE_ACCOUNT_ID` | Paysafe account ID | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
