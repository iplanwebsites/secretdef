# @secretdef/pabbly

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Pabbly** environment variables.

## Install

```bash
npm install @secretdef/pabbly secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/pabbly';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PABBLY_API_KEY` | Pabbly API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
