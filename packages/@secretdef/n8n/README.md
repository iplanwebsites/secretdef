# @secretdef/n8n

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **n8n** environment variables.

## Install

```bash
npm install @secretdef/n8n secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/n8n';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `N8N_API_KEY` | n8n API key | Yes |
| `N8N_BASE_URL` | n8n instance base URL | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
