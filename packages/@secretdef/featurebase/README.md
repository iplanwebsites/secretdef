# @secretdef/featurebase

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Featurebase** environment variables.

## Install

```bash
npm install @secretdef/featurebase secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/featurebase';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `FEATUREBASE_API_KEY` | Featurebase API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
