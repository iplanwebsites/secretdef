# @secretdef/stackshare

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **StackShare** environment variables.

## Install

```bash
npm install @secretdef/stackshare secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/stackshare';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `STACKSHARE_API_KEY` | StackShare API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
