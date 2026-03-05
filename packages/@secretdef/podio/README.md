# @secretdef/podio

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Podio** environment variables.

## Install

```bash
npm install @secretdef/podio secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/podio';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PODIO_CLIENT_ID` | Podio OAuth client ID | Yes |
| `PODIO_CLIENT_SECRET` | Podio OAuth client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
