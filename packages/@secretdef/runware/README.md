# @secretdef/runware

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Runware** environment variables.

## Install

```bash
npm install @secretdef/runware secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/runware';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `RUNWARE_API_KEY` | Runware API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
