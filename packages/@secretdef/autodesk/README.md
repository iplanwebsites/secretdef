# @secretdef/autodesk

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Autodesk** environment variables.

## Install

```bash
npm install @secretdef/autodesk secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/autodesk';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `AUTODESK_CLIENT_ID` | Autodesk Forge client ID | Yes |
| `AUTODESK_CLIENT_SECRET` | Autodesk Forge client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
