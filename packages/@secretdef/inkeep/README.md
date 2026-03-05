# @secretdef/inkeep

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Inkeep** environment variables.

## Install

```bash
npm install @secretdef/inkeep secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/inkeep';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `INKEEP_API_KEY` | Inkeep API key | Yes |
| `INKEEP_INTEGRATION_ID` | Inkeep integration ID | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
