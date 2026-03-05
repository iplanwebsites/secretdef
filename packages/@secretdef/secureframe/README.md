# @secretdef/secureframe

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Secureframe** environment variables.

## Install

```bash
npm install @secretdef/secureframe secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/secureframe';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SECUREFRAME_API_KEY` | Secureframe API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
