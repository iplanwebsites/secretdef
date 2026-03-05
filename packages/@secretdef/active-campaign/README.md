# @secretdef/active-campaign

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **ActiveCampaign** environment variables.

## Install

```bash
npm install @secretdef/active-campaign secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/active-campaign';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ACTIVECAMPAIGN_URL` | ActiveCampaign API URL | Yes |
| `ACTIVECAMPAIGN_KEY` | ActiveCampaign API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
