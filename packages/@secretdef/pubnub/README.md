# @secretdef/pubnub

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **PubNub** environment variables.

## Install

```bash
npm install @secretdef/pubnub secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/pubnub';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PUBNUB_PUBLISH_KEY` | PubNub publish key | Yes |
| `PUBNUB_SUBSCRIBE_KEY` | PubNub subscribe key | Yes |
| `PUBNUB_SECRET_KEY` | PubNub secret key | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
