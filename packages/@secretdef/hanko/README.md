# @secretdef/hanko

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Hanko** environment variables.

## Install

```bash
npm install @secretdef/hanko secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/hanko';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `HANKO_API_URL` | Hanko API URL | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
