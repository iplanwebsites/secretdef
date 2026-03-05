# @secretdef/outseta

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Outseta** environment variables.

## Install

```bash
npm install @secretdef/outseta secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/outseta';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `OUTSETA_API_KEY` | Outseta API key | Yes |
| `OUTSETA_API_SECRET` | Outseta API secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
