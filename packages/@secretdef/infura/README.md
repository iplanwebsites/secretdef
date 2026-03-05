# @secretdef/infura

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Infura** environment variables.

## Install

```bash
npm install @secretdef/infura secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/infura';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `INFURA_API_KEY` | Infura API key | Yes |
| `INFURA_API_SECRET` | Infura API secret | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
