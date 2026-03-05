# @secretdef/akeneo

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Akeneo PIM** environment variables.

## Install

```bash
npm install @secretdef/akeneo secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/akeneo';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `AKENEO_CLIENT_ID` | Akeneo OAuth client ID | Yes |
| `AKENEO_SECRET` | Akeneo OAuth secret | Yes |
| `AKENEO_BASE_URL` | Akeneo PIM base URL | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
