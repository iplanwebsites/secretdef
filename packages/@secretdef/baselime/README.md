# @secretdef/baselime

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Baselime** environment variables.

## Install

```bash
npm install @secretdef/baselime secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/baselime';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BASELIME_API_KEY` | Baselime API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
