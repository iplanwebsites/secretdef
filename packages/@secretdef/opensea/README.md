# @secretdef/opensea

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **OpenSea** environment variables.

## Install

```bash
npm install @secretdef/opensea secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/opensea';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENSEA_API_KEY` | OpenSea API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
