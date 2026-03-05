# @secretdef/budibase

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Budibase** environment variables.

## Install

```bash
npm install @secretdef/budibase secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/budibase';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BUDIBASE_API_KEY` | Budibase API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
