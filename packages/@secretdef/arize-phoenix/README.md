# @secretdef/arize-phoenix

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Arize Phoenix** environment variables.

## Install

```bash
npm install @secretdef/arize-phoenix secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/arize-phoenix';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PHOENIX_API_KEY` | Phoenix API key | Yes |
| `PHOENIX_COLLECTOR_ENDPOINT` | Phoenix collector endpoint | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
