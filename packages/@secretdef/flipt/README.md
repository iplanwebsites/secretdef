# @secretdef/flipt

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Flipt** environment variables.

## Install

```bash
npm install @secretdef/flipt secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/flipt';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `FLIPT_API_TOKEN` | Flipt API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
