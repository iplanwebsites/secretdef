# @secretdef/firebase-admin

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Firebase Admin** environment variables.

## Install

```bash
npm install @secretdef/firebase-admin secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/firebase-admin';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `FIREBASE_ADMIN_SERVICE_ACCOUNT` | Firebase Admin service account JSON | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
