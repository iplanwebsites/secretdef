# @secretdef/yext

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Yext** environment variables.

## Install

```bash
npm install @secretdef/yext secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/yext';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `YEXT_API_KEY` | Yext API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
