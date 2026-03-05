# @secretdef/cradlepoint

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Cradlepoint** environment variables.

## Install

```bash
npm install @secretdef/cradlepoint secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/cradlepoint';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CRADLEPOINT_API_KEY` | Cradlepoint NetCloud API key | Yes |
| `CRADLEPOINT_API_ID` | Cradlepoint API ID | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
