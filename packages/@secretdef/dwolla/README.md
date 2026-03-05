# @secretdef/dwolla

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Dwolla** environment variables.

## Install

```bash
npm install @secretdef/dwolla secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/dwolla';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DWOLLA_KEY` | Dwolla API key | Yes |
| `DWOLLA_SECRET` | Dwolla API secret | Yes |
| `DWOLLA_ENVIRONMENT` | Dwolla environment (sandbox/production) | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
