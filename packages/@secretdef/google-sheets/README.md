# @secretdef/google-sheets

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Google Sheets** environment variables.

## Install

```bash
npm install @secretdef/google-sheets secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/google-sheets';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `GOOGLE_SHEETS_CLIENT_EMAIL` | Google Sheets service account email | Yes |
| `GOOGLE_SHEETS_PRIVATE_KEY` | Google Sheets service account private key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
