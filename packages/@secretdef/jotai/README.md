# @secretdef/jotai

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Jotai/Jotai Cloud** environment variables.

## Install

```bash
npm install @secretdef/jotai secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/jotai';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `JOTAI_CLOUD_API_KEY` | Jotai Cloud API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
