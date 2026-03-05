# @secretdef/backendless

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Backendless** environment variables.

## Install

```bash
npm install @secretdef/backendless secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/backendless';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BACKENDLESS_APP_ID` | Backendless application ID | Yes |
| `BACKENDLESS_API_KEY` | Backendless API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
