# @secretdef/matrix

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Matrix** environment variables.

## Install

```bash
npm install @secretdef/matrix secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/matrix';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MATRIX_ACCESS_TOKEN` | Matrix access token | Yes |
| `MATRIX_HOMESERVER_URL` | Matrix homeserver URL | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
