# @secretdef/netlify-blobs

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Netlify Blobs** environment variables.

## Install

```bash
npm install @secretdef/netlify-blobs secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/netlify-blobs';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `NETLIFY_BLOBS_CONTEXT` | Netlify Blobs deploy context | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
