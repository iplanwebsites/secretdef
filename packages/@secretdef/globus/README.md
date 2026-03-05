# @secretdef/globus

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Globus** environment variables.

## Install

```bash
npm install @secretdef/globus secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/globus';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `GLOBUS_CLIENT_ID` | Globus OAuth client ID | Yes |
| `GLOBUS_CLIENT_SECRET` | Globus OAuth client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
