# @secretdef/xano

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Xano** environment variables.

## Install

```bash
npm install @secretdef/xano secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/xano';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `XANO_API_KEY` | Xano API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
