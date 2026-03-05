# @secretdef/replicache

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Replicache** environment variables.

## Install

```bash
npm install @secretdef/replicache secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/replicache';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `REPLICACHE_LICENSE_KEY` | Replicache license key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
