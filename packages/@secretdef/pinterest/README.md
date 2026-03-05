# @secretdef/pinterest

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Pinterest** environment variables.

## Install

```bash
npm install @secretdef/pinterest secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/pinterest';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PINTEREST_CLIENT_ID` | Pinterest app ID | Yes |
| `PINTEREST_CLIENT_SECRET` | Pinterest app secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
