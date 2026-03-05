# @secretdef/appfigures

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Appfigures** environment variables.

## Install

```bash
npm install @secretdef/appfigures secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/appfigures';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `APPFIGURES_CLIENT_KEY` | Appfigures client key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
