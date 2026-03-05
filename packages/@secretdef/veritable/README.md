# @secretdef/veritable

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Veritable** environment variables.

## Install

```bash
npm install @secretdef/veritable secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/veritable';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `VERITABLE_API_KEY` | Veritable API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
