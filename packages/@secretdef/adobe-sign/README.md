# @secretdef/adobe-sign

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Adobe Acrobat Sign** environment variables.

## Install

```bash
npm install @secretdef/adobe-sign secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/adobe-sign';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ADOBE_SIGN_CLIENT_ID` | Adobe Sign OAuth client ID | Yes |
| `ADOBE_SIGN_CLIENT_SECRET` | Adobe Sign OAuth client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
