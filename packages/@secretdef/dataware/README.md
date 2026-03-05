# @secretdef/dataware

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Dataware** environment variables.

## Install

```bash
npm install @secretdef/dataware secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/dataware';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DATAWARE_API_KEY` | Dataware API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
