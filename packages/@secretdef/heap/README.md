# @secretdef/heap

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Heap** environment variables.

## Install

```bash
npm install @secretdef/heap secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/heap';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `HEAP_APP_ID` | Heap app ID | Yes |
| `HEAP_API_KEY` | Heap server-side API key | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
