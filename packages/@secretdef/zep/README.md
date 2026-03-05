# @secretdef/zep

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Zep** environment variables.

## Install

```bash
npm install @secretdef/zep secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/zep';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ZEP_API_KEY` | Zep API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
