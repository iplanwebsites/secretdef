# @secretdef/coreweave

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **CoreWeave** environment variables.

## Install

```bash
npm install @secretdef/coreweave secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/coreweave';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `COREWEAVE_API_TOKEN` | CoreWeave API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
