# @secretdef/photon

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Photon Engine** environment variables.

## Install

```bash
npm install @secretdef/photon secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/photon';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PHOTON_APP_ID` | Photon application ID | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
