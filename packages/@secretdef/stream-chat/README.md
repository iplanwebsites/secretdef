# @secretdef/stream-chat

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Stream Chat** environment variables.

## Install

```bash
npm install @secretdef/stream-chat secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/stream-chat';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `STREAM_CHAT_API_KEY` | Stream Chat API key | Yes |
| `STREAM_CHAT_API_SECRET` | Stream Chat API secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
