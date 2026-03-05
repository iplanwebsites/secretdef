# @secretdef/kintone

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Kintone** environment variables.

## Install

```bash
npm install @secretdef/kintone secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/kintone';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `KINTONE_API_TOKEN` | Kintone API token | Yes |
| `KINTONE_BASE_URL` | Kintone instance URL | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
