# @secretdef/milvus

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Milvus** environment variables.

## Install

```bash
npm install @secretdef/milvus secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/milvus';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MILVUS_URI` | Milvus connection URI | Yes |
| `MILVUS_TOKEN` | Milvus auth token | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
