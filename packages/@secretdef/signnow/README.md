# @secretdef/signnow

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **signNow** environment variables.

## Install

```bash
npm install @secretdef/signnow secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/signnow';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SIGNNOW_CLIENT_ID` | signNow OAuth client ID | Yes |
| `SIGNNOW_CLIENT_SECRET` | signNow OAuth client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
