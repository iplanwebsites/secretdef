# @secretdef/exceptionless

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Exceptionless** environment variables.

## Install

```bash
npm install @secretdef/exceptionless secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/exceptionless';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `EXCEPTIONLESS_API_KEY` | Exceptionless API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
