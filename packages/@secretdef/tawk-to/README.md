# @secretdef/tawk-to

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **tawk.to** environment variables.

## Install

```bash
npm install @secretdef/tawk-to secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/tawk-to';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TAWKTO_API_KEY` | tawk.to REST API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
