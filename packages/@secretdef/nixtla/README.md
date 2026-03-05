# @secretdef/nixtla

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Nixtla** environment variables.

## Install

```bash
npm install @secretdef/nixtla secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/nixtla';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `NIXTLA_API_KEY` | Nixtla TimeGPT API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
