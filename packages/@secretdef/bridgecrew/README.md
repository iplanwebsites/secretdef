# @secretdef/bridgecrew

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Bridgecrew** environment variables.

## Install

```bash
npm install @secretdef/bridgecrew secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/bridgecrew';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BC_API_KEY` | Bridgecrew/Checkov API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
