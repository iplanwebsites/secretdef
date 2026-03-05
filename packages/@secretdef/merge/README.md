# @secretdef/merge

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Merge** environment variables.

## Install

```bash
npm install @secretdef/merge secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/merge';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MERGE_API_KEY` | Merge API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
