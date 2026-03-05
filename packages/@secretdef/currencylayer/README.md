# @secretdef/currencylayer

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Currencylayer** environment variables.

## Install

```bash
npm install @secretdef/currencylayer secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/currencylayer';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CURRENCYLAYER_API_KEY` | Currencylayer API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
