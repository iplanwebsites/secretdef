# @secretdef/acuity

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Acuity Scheduling** environment variables.

## Install

```bash
npm install @secretdef/acuity secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/acuity';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ACUITY_USER_ID` | Acuity user ID | Yes |
| `ACUITY_API_KEY` | Acuity API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
