# @secretdef/stadia-maps

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Stadia Maps** environment variables.

## Install

```bash
npm install @secretdef/stadia-maps secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/stadia-maps';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `STADIA_MAPS_API_KEY` | Stadia Maps API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
