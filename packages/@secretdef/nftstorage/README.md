# @secretdef/nftstorage

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **NFT.Storage** environment variables.

## Install

```bash
npm install @secretdef/nftstorage secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/nftstorage';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `NFT_STORAGE_TOKEN` | NFT.Storage API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
