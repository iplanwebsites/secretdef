# @secretdef/constructor-io

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Constructor.io** environment variables.

## Install

```bash
npm install @secretdef/constructor-io secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/constructor-io';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CONSTRUCTORIO_API_KEY` | Constructor.io API key | Yes |
| `CONSTRUCTORIO_API_TOKEN` | Constructor.io API token | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
