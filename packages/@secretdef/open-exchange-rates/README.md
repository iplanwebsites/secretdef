# @secretdef/open-exchange-rates

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Open Exchange Rates** environment variables.

## Install

```bash
npm install @secretdef/open-exchange-rates secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/open-exchange-rates';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `OPEN_EXCHANGE_RATES_APP_ID` | Open Exchange Rates app ID | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
