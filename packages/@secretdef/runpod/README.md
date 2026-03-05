# @secretdef/runpod

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **RunPod** environment variables.

## Install

```bash
npm install @secretdef/runpod secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/runpod';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `RUNPOD_API_KEY` | RunPod API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
