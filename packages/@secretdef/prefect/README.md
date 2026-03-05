# @secretdef/prefect

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Prefect** environment variables.

## Install

```bash
npm install @secretdef/prefect secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/prefect';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PREFECT_API_KEY` | Prefect Cloud API key | Yes |
| `PREFECT_API_URL` | Prefect API URL | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
