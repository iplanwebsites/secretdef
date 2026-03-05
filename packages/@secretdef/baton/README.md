# @secretdef/baton

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Baton** environment variables.

## Install

```bash
npm install @secretdef/baton secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/baton';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BATON_API_KEY` | Baton API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
