# @secretdef/carbone

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Carbone** environment variables.

## Install

```bash
npm install @secretdef/carbone secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/carbone';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CARBONE_API_KEY` | Carbone document generation API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
