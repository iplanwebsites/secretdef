# @secretdef/nvidia-nim

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **NVIDIA NIM** environment variables.

## Install

```bash
npm install @secretdef/nvidia-nim secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/nvidia-nim';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `NVIDIA_API_KEY` | NVIDIA API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
