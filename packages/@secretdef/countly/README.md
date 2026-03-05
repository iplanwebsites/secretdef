# @secretdef/countly

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Countly** environment variables.

## Install

```bash
npm install @secretdef/countly secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/countly';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `COUNTLY_APP_KEY` | Countly app key | Yes |
| `COUNTLY_SERVER_URL` | Countly server URL | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
