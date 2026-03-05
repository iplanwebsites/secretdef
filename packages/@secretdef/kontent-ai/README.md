# @secretdef/kontent-ai

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Kontent.ai** environment variables.

## Install

```bash
npm install @secretdef/kontent-ai secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/kontent-ai';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `KONTENT_AI_ENVIRONMENT_ID` | Kontent.ai environment ID | Yes |
| `KONTENT_AI_API_KEY` | Kontent.ai Management API key | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
