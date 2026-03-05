# @secretdef/taplytics

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Taplytics** environment variables.

## Install

```bash
npm install @secretdef/taplytics secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/taplytics';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TAPLYTICS_SDK_KEY` | Taplytics SDK key | Yes |
| `TAPLYTICS_REST_API_KEY` | Taplytics REST API key | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
