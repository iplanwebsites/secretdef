# @secretdef/workato

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Workato** environment variables.

## Install

```bash
npm install @secretdef/workato secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/workato';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `WORKATO_API_TOKEN` | Workato API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
