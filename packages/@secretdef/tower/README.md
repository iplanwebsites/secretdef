# @secretdef/tower

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Tower** environment variables.

## Install

```bash
npm install @secretdef/tower secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/tower';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TOWER_API_KEY` | Tower API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
