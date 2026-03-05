# @secretdef/exa

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Exa** environment variables.

## Install

```bash
npm install @secretdef/exa secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/exa';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `EXA_API_KEY` | Exa search API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
