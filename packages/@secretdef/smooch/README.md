# @secretdef/smooch

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Smooch/Sunshine Conversations** environment variables.

## Install

```bash
npm install @secretdef/smooch secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/smooch';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SMOOCH_KEY_ID` | Smooch API key ID | Yes |
| `SMOOCH_SECRET` | Smooch API secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
