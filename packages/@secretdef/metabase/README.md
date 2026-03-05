# @secretdef/metabase

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Metabase** environment variables.

## Install

```bash
npm install @secretdef/metabase secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/metabase';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `METABASE_SITE_URL` | Metabase instance URL | Yes |
| `METABASE_API_KEY` | Metabase API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
