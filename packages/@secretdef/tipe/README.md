# @secretdef/tipe

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Tipe** environment variables.

## Install

```bash
npm install @secretdef/tipe secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/tipe';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TIPE_API_KEY` | Tipe CMS API key | Yes |
| `TIPE_ORG_ID` | Tipe organization ID | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
