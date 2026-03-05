# @secretdef/fcm

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Firebase Cloud Messaging** environment variables.

## Install

```bash
npm install @secretdef/fcm secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/fcm';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `FCM_SERVER_KEY` | FCM server key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
