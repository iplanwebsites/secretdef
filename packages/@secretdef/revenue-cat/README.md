# @secretdef/revenue-cat

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **RevenueCat** environment variables.

## Install

```bash
npm install @secretdef/revenue-cat secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/revenue-cat';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `REVENUECAT_API_KEY` | RevenueCat API key | Yes |
| `REVENUECAT_SECRET_KEY` | RevenueCat secret API key | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
