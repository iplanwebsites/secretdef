# @secretdef/snovio

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Snov.io** environment variables.

## Install

```bash
npm install @secretdef/snovio secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/snovio';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SNOVIO_USER_ID` | Snov.io user ID | Yes |
| `SNOVIO_API_KEY` | Snov.io API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
