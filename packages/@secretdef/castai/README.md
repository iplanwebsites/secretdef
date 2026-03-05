# @secretdef/castai

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **CAST AI** environment variables.

## Install

```bash
npm install @secretdef/castai secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/castai';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CAST_API_KEY` | CAST AI API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
