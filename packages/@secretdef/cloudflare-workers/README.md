# @secretdef/cloudflare-workers

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Cloudflare Workers** environment variables.

## Install

```bash
npm install @secretdef/cloudflare-workers secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/cloudflare-workers';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CF_ACCOUNT_ID` | Cloudflare account ID for Workers | Yes |
| `CF_API_TOKEN` | Cloudflare API token for Workers | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
