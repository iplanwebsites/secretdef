# @secretdef/google-drive

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Google Drive** environment variables.

## Install

```bash
npm install @secretdef/google-drive secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/google-drive';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `GOOGLE_DRIVE_CLIENT_ID` | Google Drive OAuth client ID | Yes |
| `GOOGLE_DRIVE_CLIENT_SECRET` | Google Drive OAuth client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
