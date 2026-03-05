# @secretdef/criteo

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Criteo** environment variables.

## Install

```bash
npm install @secretdef/criteo secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/criteo';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CRITEO_CLIENT_ID` | Criteo client ID | Yes |
| `CRITEO_CLIENT_SECRET` | Criteo client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
