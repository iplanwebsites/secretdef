# @secretdef/assembla

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Assembla** environment variables.

## Install

```bash
npm install @secretdef/assembla secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/assembla';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ASSEMBLA_API_KEY` | Assembla API key | Yes |
| `ASSEMBLA_API_SECRET` | Assembla API secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
