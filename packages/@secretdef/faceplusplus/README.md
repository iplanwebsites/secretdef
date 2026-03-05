# @secretdef/faceplusplus

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Face++** environment variables.

## Install

```bash
npm install @secretdef/faceplusplus secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/faceplusplus';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `FACEPP_API_KEY` | Face++ API key | Yes |
| `FACEPP_API_SECRET` | Face++ API secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
