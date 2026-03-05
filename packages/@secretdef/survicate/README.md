# @secretdef/survicate

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Survicate** environment variables.

## Install

```bash
npm install @secretdef/survicate secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/survicate';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SURVICATE_WORKSPACE_KEY` | Survicate workspace key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
