# @secretdef/fly

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Fly.io** environment variables.

## Install

```bash
npm install @secretdef/fly secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/fly';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `FLY_API_TOKEN` | Fly.io API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
