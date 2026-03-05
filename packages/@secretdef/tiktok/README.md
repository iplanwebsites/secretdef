# @secretdef/tiktok

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **TikTok** environment variables.

## Install

```bash
npm install @secretdef/tiktok secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/tiktok';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TIKTOK_CLIENT_KEY` | TikTok client key | Yes |
| `TIKTOK_CLIENT_SECRET` | TikTok client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
