# @secretdef/google-analytics

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Google Analytics** environment variables.

## Install

```bash
npm install @secretdef/google-analytics secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/google-analytics';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `GA_MEASUREMENT_ID` | Google Analytics measurement ID | Yes |
| `GA_API_SECRET` | Google Analytics measurement protocol API secret | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
