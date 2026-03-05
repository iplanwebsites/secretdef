# @secretdef/appsmith

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Appsmith** environment variables.

## Install

```bash
npm install @secretdef/appsmith secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/appsmith';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `APPSMITH_API_KEY` | Appsmith API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
