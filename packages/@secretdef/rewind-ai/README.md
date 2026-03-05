# @secretdef/rewind-ai

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Rewind Backups** environment variables.

## Install

```bash
npm install @secretdef/rewind-ai secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/rewind-ai';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `REWIND_API_KEY` | Rewind backup API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
