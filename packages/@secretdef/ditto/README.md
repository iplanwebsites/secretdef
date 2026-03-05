# @secretdef/ditto

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Ditto** environment variables.

## Install

```bash
npm install @secretdef/ditto secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/ditto';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DITTO_APP_ID` | Ditto app ID | Yes |
| `DITTO_TOKEN` | Ditto auth token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
