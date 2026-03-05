# @secretdef/finicity

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Finicity** environment variables.

## Install

```bash
npm install @secretdef/finicity secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/finicity';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `FINICITY_APP_KEY` | Finicity app key | Yes |
| `FINICITY_PARTNER_ID` | Finicity partner ID | Yes |
| `FINICITY_PARTNER_SECRET` | Finicity partner secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
