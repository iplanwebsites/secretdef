# @secretdef/commercetools

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Commercetools** environment variables.

## Install

```bash
npm install @secretdef/commercetools secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/commercetools';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CTP_CLIENT_ID` | Commercetools client ID | Yes |
| `CTP_CLIENT_SECRET` | Commercetools client secret | Yes |
| `CTP_PROJECT_KEY` | Commercetools project key | Yes |
| `CTP_AUTH_URL` | Commercetools auth URL | No |
| `CTP_API_URL` | Commercetools API URL | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
