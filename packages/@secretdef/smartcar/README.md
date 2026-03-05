# @secretdef/smartcar

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Smartcar** environment variables.

## Install

```bash
npm install @secretdef/smartcar secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/smartcar';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SMARTCAR_CLIENT_ID` | Smartcar OAuth client ID | Yes |
| `SMARTCAR_CLIENT_SECRET` | Smartcar OAuth client secret | Yes |
| `SMARTCAR_REDIRECT_URI` | Smartcar OAuth redirect URI | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
