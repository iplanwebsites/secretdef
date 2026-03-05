# @secretdef/functionland

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Functionland** environment variables.

## Install

```bash
npm install @secretdef/functionland secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/functionland';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `FULA_API_KEY` | Functionland/Fula API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
