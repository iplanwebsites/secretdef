# @secretdef/comet-ml

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Comet ML** environment variables.

## Install

```bash
npm install @secretdef/comet-ml secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/comet-ml';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `COMET_API_KEY` | Comet ML API key | Yes |
| `COMET_WORKSPACE` | Comet workspace name | No |
| `COMET_PROJECT_NAME` | Comet project name | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
