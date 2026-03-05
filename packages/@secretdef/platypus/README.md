# @secretdef/platypus

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Platypus** environment variables.

## Install

```bash
npm install @secretdef/platypus secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/platypus';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PLATYPUS_API_KEY` | Platypus API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
