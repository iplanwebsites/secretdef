# @secretdef/pardot

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Pardot (Salesforce MCAE)** environment variables.

## Install

```bash
npm install @secretdef/pardot secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/pardot';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PARDOT_CLIENT_ID` | Pardot client ID | Yes |
| `PARDOT_CLIENT_SECRET` | Pardot client secret | Yes |
| `PARDOT_BUSINESS_UNIT_ID` | Pardot business unit ID | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
