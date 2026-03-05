# @secretdef/chatwoot

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Chatwoot** environment variables.

## Install

```bash
npm install @secretdef/chatwoot secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/chatwoot';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CHATWOOT_API_ACCESS_TOKEN` | Chatwoot API access token | Yes |
| `CHATWOOT_BASE_URL` | Chatwoot base URL | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
