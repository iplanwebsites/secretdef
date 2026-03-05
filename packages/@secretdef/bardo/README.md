# @secretdef/bardo

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Bardo** environment variables.

## Install

```bash
npm install @secretdef/bardo secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/bardo';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BARDO_API_KEY` | Bardo API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
