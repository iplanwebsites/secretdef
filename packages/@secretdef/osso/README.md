# @secretdef/osso

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Osso** environment variables.

## Install

```bash
npm install @secretdef/osso secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/osso';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `OSSO_BASE_URL` | Osso base URL | Yes |
| `OSSO_CLIENT_ID` | Osso OAuth client ID | Yes |
| `OSSO_CLIENT_SECRET` | Osso OAuth client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
