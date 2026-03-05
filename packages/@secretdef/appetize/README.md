# @secretdef/appetize

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Appetize** environment variables.

## Install

```bash
npm install @secretdef/appetize secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/appetize';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `APPETIZE_API_TOKEN` | Appetize API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
