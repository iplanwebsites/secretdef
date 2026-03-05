# @secretdef/forter

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Forter** environment variables.

## Install

```bash
npm install @secretdef/forter secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/forter';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `FORTER_SITE_ID` | Forter site ID | Yes |
| `FORTER_SECRET_KEY` | Forter secret key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
