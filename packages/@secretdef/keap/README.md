# @secretdef/keap

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Keap (Infusionsoft)** environment variables.

## Install

```bash
npm install @secretdef/keap secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/keap';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `KEAP_CLIENT_ID` | Keap OAuth client ID | Yes |
| `KEAP_CLIENT_SECRET` | Keap OAuth client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
