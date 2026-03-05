# @secretdef/appbot

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Appbot** environment variables.

## Install

```bash
npm install @secretdef/appbot secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/appbot';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `APPBOT_API_KEY` | Appbot API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
