# @secretdef/twitch-ext

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Twitch Extensions** environment variables.

## Install

```bash
npm install @secretdef/twitch-ext secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/twitch-ext';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TWITCH_EXT_CLIENT_ID` | Twitch extension client ID | Yes |
| `TWITCH_EXT_SECRET` | Twitch extension secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
