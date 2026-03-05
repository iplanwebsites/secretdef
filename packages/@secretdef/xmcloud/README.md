# @secretdef/xmcloud

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Sitecore XM Cloud** environment variables.

## Install

```bash
npm install @secretdef/xmcloud secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/xmcloud';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SITECORE_API_KEY` | Sitecore XM Cloud API key | Yes |
| `SITECORE_EDGE_URL` | Sitecore Edge endpoint URL | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
