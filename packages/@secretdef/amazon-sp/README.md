# @secretdef/amazon-sp

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Amazon Selling Partner** environment variables.

## Install

```bash
npm install @secretdef/amazon-sp secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/amazon-sp';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `AMAZON_SP_APP_CLIENT_ID` | Amazon SP API client ID | Yes |
| `AMAZON_SP_APP_CLIENT_SECRET` | Amazon SP API client secret | Yes |
| `AMAZON_SP_REFRESH_TOKEN` | Amazon SP API refresh token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
