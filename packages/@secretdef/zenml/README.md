# @secretdef/zenml

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **ZenML** environment variables.

## Install

```bash
npm install @secretdef/zenml secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/zenml';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ZENML_API_KEY` | ZenML API key | Yes |
| `ZENML_SERVER_URL` | ZenML server URL | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
