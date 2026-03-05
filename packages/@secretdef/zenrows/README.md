# @secretdef/zenrows

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **ZenRows** environment variables.

## Install

```bash
npm install @secretdef/zenrows secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/zenrows';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ZENROWS_API_KEY` | ZenRows API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
