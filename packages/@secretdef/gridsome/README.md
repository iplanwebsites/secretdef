# @secretdef/gridsome

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Gridsome Cloud** environment variables.

## Install

```bash
npm install @secretdef/gridsome secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/gridsome';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `GRIDSOME_API_KEY` | Gridsome API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
