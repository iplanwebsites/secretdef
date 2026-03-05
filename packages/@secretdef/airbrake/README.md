# @secretdef/airbrake

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Airbrake** environment variables.

## Install

```bash
npm install @secretdef/airbrake secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/airbrake';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `AIRBRAKE_PROJECT_ID` | Airbrake project ID | Yes |
| `AIRBRAKE_PROJECT_KEY` | Airbrake project key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
