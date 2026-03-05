# @secretdef/affinity

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Affinity** environment variables.

## Install

```bash
npm install @secretdef/affinity secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/affinity';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `AFFINITY_API_KEY` | Affinity API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
