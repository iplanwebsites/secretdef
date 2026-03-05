# @secretdef/chronosphere

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Chronosphere** environment variables.

## Install

```bash
npm install @secretdef/chronosphere secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/chronosphere';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CHRONOSPHERE_API_TOKEN` | Chronosphere API token | Yes |
| `CHRONOSPHERE_ORG_NAME` | Chronosphere organization | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
