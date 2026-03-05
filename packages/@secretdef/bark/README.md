# @secretdef/bark

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Bark** environment variables.

## Install

```bash
npm install @secretdef/bark secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/bark';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BARK_SERVER_URL` | Bark push notification server URL | Yes |
| `BARK_DEVICE_KEY` | Bark device key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
