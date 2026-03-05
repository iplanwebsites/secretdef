# @secretdef/customerfields

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Customer Fields** environment variables.

## Install

```bash
npm install @secretdef/customerfields secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/customerfields';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CUSTOMERFIELDS_API_KEY` | Customer Fields API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
