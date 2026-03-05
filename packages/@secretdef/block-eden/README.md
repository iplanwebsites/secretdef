# @secretdef/block-eden

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **BlockEden** environment variables.

## Install

```bash
npm install @secretdef/block-eden secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/block-eden';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BLOCKEDEN_API_KEY` | BlockEden API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
