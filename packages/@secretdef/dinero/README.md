# @secretdef/dinero

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Dinero** environment variables.

## Install

```bash
npm install @secretdef/dinero secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/dinero';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DINERO_API_KEY` | Dinero API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
