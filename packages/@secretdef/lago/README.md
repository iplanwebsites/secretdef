# @secretdef/lago

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Lago** environment variables.

## Install

```bash
npm install @secretdef/lago secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/lago';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `LAGO_API_KEY` | Lago API key | Yes |
| `LAGO_API_URL` | Lago API URL | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
