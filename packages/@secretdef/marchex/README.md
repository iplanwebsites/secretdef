# @secretdef/marchex

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Marchex** environment variables.

## Install

```bash
npm install @secretdef/marchex secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/marchex';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MARCHEX_ACCOUNT_ID` | Marchex account ID | Yes |
| `MARCHEX_API_KEY` | Marchex API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
