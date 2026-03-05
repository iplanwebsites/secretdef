# @secretdef/storetasker

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **StoreTasker** environment variables.

## Install

```bash
npm install @secretdef/storetasker secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/storetasker';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `STORETASKER_API_KEY` | StoreTasker API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
