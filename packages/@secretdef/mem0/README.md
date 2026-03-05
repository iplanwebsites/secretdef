# @secretdef/mem0

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Mem0** environment variables.

## Install

```bash
npm install @secretdef/mem0 secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/mem0';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MEM0_API_KEY` | Mem0 API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
