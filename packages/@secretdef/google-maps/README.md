# @secretdef/google-maps

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Google Maps** environment variables.

## Install

```bash
npm install @secretdef/google-maps secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/google-maps';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `GOOGLE_MAPS_API_KEY` | Google Maps API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
