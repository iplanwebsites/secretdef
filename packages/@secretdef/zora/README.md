# @secretdef/zora

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Zora** environment variables.

## Install

```bash
npm install @secretdef/zora secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/zora';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ZORA_API_KEY` | Zora NFT API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
