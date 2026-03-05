# @secretdef/fitbit

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Fitbit** environment variables.

## Install

```bash
npm install @secretdef/fitbit secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/fitbit';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `FITBIT_CLIENT_ID` | Fitbit OAuth client ID | Yes |
| `FITBIT_CLIENT_SECRET` | Fitbit OAuth client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
