# @secretdef/alloy

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Alloy** environment variables.

## Install

```bash
npm install @secretdef/alloy secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/alloy';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ALLOY_API_KEY` | Alloy identity verification API key | Yes |
| `ALLOY_API_SECRET` | Alloy API secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
