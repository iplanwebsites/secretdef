# @secretdef/notificationapi

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **NotificationAPI** environment variables.

## Install

```bash
npm install @secretdef/notificationapi secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/notificationapi';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `NOTIFICATIONAPI_CLIENT_ID` | NotificationAPI client ID | Yes |
| `NOTIFICATIONAPI_CLIENT_SECRET` | NotificationAPI client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
