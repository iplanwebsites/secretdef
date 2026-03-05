# @secretdef/lever

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Lever** environment variables.

## Install

```bash
npm install @secretdef/lever secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/lever';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `LEVER_API_KEY` | Lever API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
