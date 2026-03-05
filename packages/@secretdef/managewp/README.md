# @secretdef/managewp

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **ManageWP** environment variables.

## Install

```bash
npm install @secretdef/managewp secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/managewp';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MANAGEWP_API_KEY` | ManageWP API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
