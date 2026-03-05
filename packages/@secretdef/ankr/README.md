# @secretdef/ankr

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Ankr** environment variables.

## Install

```bash
npm install @secretdef/ankr secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/ankr';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ANKR_API_KEY` | Ankr API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
