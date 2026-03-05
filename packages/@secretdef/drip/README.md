# @secretdef/drip

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Drip** environment variables.

## Install

```bash
npm install @secretdef/drip secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/drip';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DRIP_API_KEY` | Drip API key | Yes |
| `DRIP_ACCOUNT_ID` | Drip account ID | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
