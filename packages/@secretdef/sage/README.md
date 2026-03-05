# @secretdef/sage

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Sage** environment variables.

## Install

```bash
npm install @secretdef/sage secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/sage';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SAGE_CLIENT_ID` | Sage OAuth client ID | Yes |
| `SAGE_CLIENT_SECRET` | Sage OAuth client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
