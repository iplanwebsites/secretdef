# @secretdef/codat

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Codat** environment variables.

## Install

```bash
npm install @secretdef/codat secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/codat';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CODAT_AUTH_HEADER` | Codat authorization header | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
