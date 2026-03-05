# @secretdef/ringcentral

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **RingCentral** environment variables.

## Install

```bash
npm install @secretdef/ringcentral secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/ringcentral';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `RINGCENTRAL_CLIENT_ID` | RingCentral client ID | Yes |
| `RINGCENTRAL_CLIENT_SECRET` | RingCentral client secret | Yes |
| `RINGCENTRAL_SERVER_URL` | RingCentral server URL | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
