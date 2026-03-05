# @secretdef/cometchat

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **CometChat** environment variables.

## Install

```bash
npm install @secretdef/cometchat secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/cometchat';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `COMETCHAT_APP_ID` | CometChat app ID | Yes |
| `COMETCHAT_AUTH_KEY` | CometChat auth key | Yes |
| `COMETCHAT_API_KEY` | CometChat REST API key | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
