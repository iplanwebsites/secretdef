# @secretdef/opencage

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **OpenCage** environment variables.

## Install

```bash
npm install @secretdef/opencage secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/opencage';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENCAGE_API_KEY` | OpenCage geocoding API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
