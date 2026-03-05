# @secretdef/doordash

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **DoorDash** environment variables.

## Install

```bash
npm install @secretdef/doordash secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/doordash';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DOORDASH_DEVELOPER_ID` | DoorDash developer ID | Yes |
| `DOORDASH_KEY_ID` | DoorDash key ID | Yes |
| `DOORDASH_SIGNING_SECRET` | DoorDash signing secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
