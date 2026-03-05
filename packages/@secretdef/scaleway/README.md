# @secretdef/scaleway

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Scaleway** environment variables.

## Install

```bash
npm install @secretdef/scaleway secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/scaleway';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SCALEWAY_ACCESS_KEY` | Scaleway access key | Yes |
| `SCALEWAY_SECRET_KEY` | Scaleway secret key | Yes |
| `SCALEWAY_PROJECT_ID` | Scaleway project ID | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
