# @secretdef/hexnode

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Hexnode** environment variables.

## Install

```bash
npm install @secretdef/hexnode secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/hexnode';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `HEXNODE_API_KEY` | Hexnode MDM API key | Yes |
| `HEXNODE_PORTAL` | Hexnode portal URL | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
