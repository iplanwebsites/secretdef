# @secretdef/flagright

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Flagright** environment variables.

## Install

```bash
npm install @secretdef/flagright secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/flagright';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `FLAGRIGHT_API_KEY` | Flagright API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
