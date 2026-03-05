# @secretdef/veriff

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Veriff** environment variables.

## Install

```bash
npm install @secretdef/veriff secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/veriff';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `VERIFF_API_KEY` | Veriff API key | Yes |
| `VERIFF_SECRET_KEY` | Veriff shared secret key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
