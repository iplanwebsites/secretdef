# @secretdef/roboflow

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Roboflow** environment variables.

## Install

```bash
npm install @secretdef/roboflow secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/roboflow';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ROBOFLOW_API_KEY` | Roboflow API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
