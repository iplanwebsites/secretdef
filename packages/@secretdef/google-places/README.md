# @secretdef/google-places

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Google Places** environment variables.

## Install

```bash
npm install @secretdef/google-places secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/google-places';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `GOOGLE_PLACES_API_KEY` | Google Places API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
