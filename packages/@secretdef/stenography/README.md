# @secretdef/stenography

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Stenography** environment variables.

## Install

```bash
npm install @secretdef/stenography secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/stenography';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `STENOGRAPHY_API_KEY` | Stenography API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
