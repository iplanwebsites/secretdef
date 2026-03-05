# @secretdef/apptio

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Apptio** environment variables.

## Install

```bash
npm install @secretdef/apptio secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/apptio';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `APPTIO_API_KEY` | Apptio API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
