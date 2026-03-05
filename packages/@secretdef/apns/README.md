# @secretdef/apns

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Apple Push Notification Service** environment variables.

## Install

```bash
npm install @secretdef/apns secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/apns';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `APNS_KEY_ID` | APNs key ID | Yes |
| `APNS_TEAM_ID` | Apple Developer team ID | Yes |
| `APNS_AUTH_KEY` | APNs authentication key (.p8) | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
