# @secretdef/vectara

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Vectara** environment variables.

## Install

```bash
npm install @secretdef/vectara secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/vectara';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `VECTARA_CUSTOMER_ID` | Vectara customer ID | Yes |
| `VECTARA_API_KEY` | Vectara API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
