# @secretdef/coda

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Coda** environment variables.

## Install

```bash
npm install @secretdef/coda secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/coda';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CODA_API_KEY` | Coda API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
