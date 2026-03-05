# @secretdef/hume-ai

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Hume AI** environment variables.

## Install

```bash
npm install @secretdef/hume-ai secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/hume-ai';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `HUME_API_KEY` | Hume AI API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
