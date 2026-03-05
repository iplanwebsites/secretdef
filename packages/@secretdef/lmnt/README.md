# @secretdef/lmnt

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **LMNT** environment variables.

## Install

```bash
npm install @secretdef/lmnt secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/lmnt';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `LMNT_API_KEY` | LMNT speech API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
