# @secretdef/betterstack

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Better Stack** environment variables.

## Install

```bash
npm install @secretdef/betterstack secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/betterstack';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BETTERSTACK_API_TOKEN` | Better Stack API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
