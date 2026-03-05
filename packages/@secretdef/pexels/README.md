# @secretdef/pexels

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Pexels** environment variables.

## Install

```bash
npm install @secretdef/pexels secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/pexels';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PEXELS_API_KEY` | Pexels API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
