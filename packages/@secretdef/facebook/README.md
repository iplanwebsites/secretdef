# @secretdef/facebook

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Facebook** environment variables.

## Install

```bash
npm install @secretdef/facebook secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/facebook';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `FACEBOOK_APP_ID` | Facebook app ID | Yes |
| `FACEBOOK_APP_SECRET` | Facebook app secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
