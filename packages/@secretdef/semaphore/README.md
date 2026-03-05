# @secretdef/semaphore

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Semaphore CI** environment variables.

## Install

```bash
npm install @secretdef/semaphore secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/semaphore';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SEMAPHORE_API_TOKEN` | Semaphore CI API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
