# @secretdef/loginradius

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **LoginRadius** environment variables.

## Install

```bash
npm install @secretdef/loginradius secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/loginradius';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `LOGINRADIUS_API_KEY` | LoginRadius API key | Yes |
| `LOGINRADIUS_API_SECRET` | LoginRadius API secret | Yes |
| `LOGINRADIUS_APP_NAME` | LoginRadius app name | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
