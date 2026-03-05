# @secretdef/helius

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Helius (Solana)** environment variables.

## Install

```bash
npm install @secretdef/helius secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/helius';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `HELIUS_API_KEY` | Helius API key for Solana | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
