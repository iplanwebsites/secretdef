# @secretdef/detectify

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Detectify** environment variables.

## Install

```bash
npm install @secretdef/detectify secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/detectify';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DETECTIFY_API_KEY` | Detectify API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
