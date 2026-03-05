# @secretdef/alchemy

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Alchemy** environment variables.

## Install

```bash
npm install @secretdef/alchemy secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/alchemy';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ALCHEMY_API_KEY` | Alchemy API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
