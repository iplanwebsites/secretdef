# @secretdef/square-pos

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Square POS** environment variables.

## Install

```bash
npm install @secretdef/square-pos secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/square-pos';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SQUARE_ACCESS_TOKEN_POS` | Square POS access token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
