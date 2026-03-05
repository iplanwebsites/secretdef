# @secretdef/ngrok

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **ngrok** environment variables.

## Install

```bash
npm install @secretdef/ngrok secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/ngrok';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `NGROK_AUTHTOKEN` | ngrok auth token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
