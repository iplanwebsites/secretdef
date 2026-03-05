# @secretdef/chameleon

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Chameleon** environment variables.

## Install

```bash
npm install @secretdef/chameleon secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/chameleon';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CHAMELEON_API_KEY` | Chameleon API key | Yes |
| `CHAMELEON_SECRET_KEY` | Chameleon secret key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
