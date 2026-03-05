# @secretdef/telesign

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **TeleSign** environment variables.

## Install

```bash
npm install @secretdef/telesign secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/telesign';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TELESIGN_CUSTOMER_ID` | TeleSign customer ID | Yes |
| `TELESIGN_API_KEY` | TeleSign API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
