# @secretdef/customer-io

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Customer.io** environment variables.

## Install

```bash
npm install @secretdef/customer-io secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/customer-io';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CUSTOMERIO_SITE_ID` | Customer.io site ID | Yes |
| `CUSTOMERIO_API_KEY` | Customer.io API key | Yes |
| `CUSTOMERIO_APP_API_KEY` | Customer.io App API key | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
