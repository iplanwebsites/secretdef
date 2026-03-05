# @secretdef/yotpo

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Yotpo** environment variables.

## Install

```bash
npm install @secretdef/yotpo secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/yotpo';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `YOTPO_APP_KEY` | Yotpo app key | Yes |
| `YOTPO_SECRET` | Yotpo secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
