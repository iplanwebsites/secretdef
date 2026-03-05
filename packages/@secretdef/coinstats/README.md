# @secretdef/coinstats

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **CoinStats** environment variables.

## Install

```bash
npm install @secretdef/coinstats secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/coinstats';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `COINSTATS_API_KEY` | CoinStats API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
