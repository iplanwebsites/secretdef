# @secretdef/swiftype

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Swiftype** environment variables.

## Install

```bash
npm install @secretdef/swiftype secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/swiftype';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SWIFTYPE_API_KEY` | Swiftype API key | Yes |
| `SWIFTYPE_ENGINE_NAME` | Swiftype engine name | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
