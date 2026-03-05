# @secretdef/baidu-qianfan

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Baidu Qianfan** environment variables.

## Install

```bash
npm install @secretdef/baidu-qianfan secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/baidu-qianfan';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `QIANFAN_API_KEY` | Qianfan API key | Yes |
| `QIANFAN_SECRET_KEY` | Qianfan secret key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
