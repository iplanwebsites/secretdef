# @secretdef/etherscan

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Etherscan** environment variables.

## Install

```bash
npm install @secretdef/etherscan secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/etherscan';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ETHERSCAN_API_KEY` | Etherscan API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
