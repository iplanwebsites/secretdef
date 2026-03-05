# @secretdef/airbyte

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Airbyte** environment variables.

## Install

```bash
npm install @secretdef/airbyte secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/airbyte';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `AIRBYTE_API_KEY` | Airbyte API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
