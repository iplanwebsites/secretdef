# @secretdef/cerbos

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Cerbos** environment variables.

## Install

```bash
npm install @secretdef/cerbos secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/cerbos';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CERBOS_HUB_CLIENT_ID` | Cerbos Hub client ID | Yes |
| `CERBOS_HUB_CLIENT_SECRET` | Cerbos Hub client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
