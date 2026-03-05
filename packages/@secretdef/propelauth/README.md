# @secretdef/propelauth

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **PropelAuth** environment variables.

## Install

```bash
npm install @secretdef/propelauth secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/propelauth';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PROPELAUTH_AUTH_URL` | PropelAuth auth URL | Yes |
| `PROPELAUTH_API_KEY` | PropelAuth API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
