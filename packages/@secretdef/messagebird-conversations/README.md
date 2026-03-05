# @secretdef/messagebird-conversations

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **MessageBird Conversations** environment variables.

## Install

```bash
npm install @secretdef/messagebird-conversations secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/messagebird-conversations';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MESSAGEBIRD_CONVERSATIONS_KEY` | MessageBird Conversations API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
