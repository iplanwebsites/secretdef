# @secretdef/printify

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Printify** environment variables.

## Install

```bash
npm install @secretdef/printify secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/printify';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PRINTIFY_API_TOKEN` | Printify API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
