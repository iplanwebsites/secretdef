# @secretdef/savvycal

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **SavvyCal** environment variables.

## Install

```bash
npm install @secretdef/savvycal secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/savvycal';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SAVVYCAL_API_KEY` | SavvyCal API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
