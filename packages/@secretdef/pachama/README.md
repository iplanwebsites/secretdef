# @secretdef/pachama

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Pachama** environment variables.

## Install

```bash
npm install @secretdef/pachama secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/pachama';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PACHAMA_API_KEY` | Pachama API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
