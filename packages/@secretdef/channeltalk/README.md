# @secretdef/channeltalk

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Channel Talk** environment variables.

## Install

```bash
npm install @secretdef/channeltalk secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/channeltalk';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CHANNEL_PLUGIN_KEY` | Channel Talk plugin key | Yes |
| `CHANNEL_ACCESS_SECRET` | Channel Talk access secret | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
