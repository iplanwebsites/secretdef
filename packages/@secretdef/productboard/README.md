# @secretdef/productboard

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Productboard** environment variables.

## Install

```bash
npm install @secretdef/productboard secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/productboard';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PRODUCTBOARD_API_TOKEN` | Productboard API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
