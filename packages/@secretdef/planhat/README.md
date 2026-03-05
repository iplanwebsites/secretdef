# @secretdef/planhat

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Planhat** environment variables.

## Install

```bash
npm install @secretdef/planhat secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/planhat';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PLANHAT_API_TOKEN` | Planhat API token | Yes |
| `PLANHAT_TENANT_UUID` | Planhat tenant UUID | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
