# @secretdef/clevercloud

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Clever Cloud** environment variables.

## Install

```bash
npm install @secretdef/clevercloud secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/clevercloud';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CLEVER_TOKEN` | Clever Cloud API token | Yes |
| `CLEVER_SECRET` | Clever Cloud API secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
