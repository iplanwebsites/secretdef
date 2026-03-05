# @secretdef/jamf

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Jamf Pro** environment variables.

## Install

```bash
npm install @secretdef/jamf secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/jamf';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `JAMF_URL` | Jamf Pro server URL | Yes |
| `JAMF_CLIENT_ID` | Jamf Pro API client ID | Yes |
| `JAMF_CLIENT_SECRET` | Jamf Pro API client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
