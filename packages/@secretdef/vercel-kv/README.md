# @secretdef/vercel-kv

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Vercel KV** environment variables.

## Install

```bash
npm install @secretdef/vercel-kv secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/vercel-kv';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `KV_REST_API_URL` | Vercel KV REST API URL | Yes |
| `KV_REST_API_TOKEN` | Vercel KV REST API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
