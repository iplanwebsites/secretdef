# @secretdef/make

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Make (Integromat)** environment variables.

## Install

```bash
npm install @secretdef/make secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/make';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MAKE_API_KEY` | Make API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
