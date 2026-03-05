# @secretdef/godaddy

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **GoDaddy** environment variables.

## Install

```bash
npm install @secretdef/godaddy secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/godaddy';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `GODADDY_API_KEY` | GoDaddy API key | Yes |
| `GODADDY_API_SECRET` | GoDaddy API secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
