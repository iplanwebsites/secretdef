# @secretdef/transifex

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Transifex** environment variables.

## Install

```bash
npm install @secretdef/transifex secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/transifex';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TRANSIFEX_API_TOKEN` | Transifex API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
