# @secretdef/tyk

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Tyk** environment variables.

## Install

```bash
npm install @secretdef/tyk secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/tyk';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TYK_GW_SECRET` | Tyk gateway secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
