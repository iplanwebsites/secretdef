# @secretdef/vercel-blob

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Vercel Blob** environment variables.

## Install

```bash
npm install @secretdef/vercel-blob secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/vercel-blob';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob read-write token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
