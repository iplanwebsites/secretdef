# @secretdef/gocardless

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **GoCardless** environment variables.

## Install

```bash
npm install @secretdef/gocardless secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/gocardless';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `GOCARDLESS_ACCESS_TOKEN` | GoCardless access token | Yes |
| `GOCARDLESS_ENVIRONMENT` | GoCardless environment (sandbox or live) | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
