# @secretdef/luma-ai

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Luma AI** environment variables.

## Install

```bash
npm install @secretdef/luma-ai secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/luma-ai';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `LUMAAI_API_KEY` | Luma AI API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
