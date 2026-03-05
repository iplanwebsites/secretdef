# @secretdef/cartesia

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Cartesia** environment variables.

## Install

```bash
npm install @secretdef/cartesia secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/cartesia';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CARTESIA_API_KEY` | Cartesia API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
