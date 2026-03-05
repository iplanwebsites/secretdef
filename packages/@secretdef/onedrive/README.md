# @secretdef/onedrive

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **OneDrive** environment variables.

## Install

```bash
npm install @secretdef/onedrive secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/onedrive';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ONEDRIVE_CLIENT_ID` | OneDrive OAuth client ID | Yes |
| `ONEDRIVE_CLIENT_SECRET` | OneDrive OAuth client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
