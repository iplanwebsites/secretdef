# @secretdef/web3storage

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Web3.Storage** environment variables.

## Install

```bash
npm install @secretdef/web3storage secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/web3storage';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `WEB3STORAGE_TOKEN` | Web3.Storage API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
