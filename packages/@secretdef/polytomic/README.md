# @secretdef/polytomic

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Polytomic** environment variables.

## Install

```bash
npm install @secretdef/polytomic secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/polytomic';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `POLYTOMIC_API_KEY` | Polytomic API key | Yes |
| `POLYTOMIC_DEPLOYMENT_URL` | Polytomic deployment URL | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
