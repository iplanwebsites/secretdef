# @secretdef/fixer-io

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Fixer.io** environment variables.

## Install

```bash
npm install @secretdef/fixer-io secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/fixer-io';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `FIXER_API_KEY` | Fixer.io API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
