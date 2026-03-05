# @secretdef/dynata

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Dynata** environment variables.

## Install

```bash
npm install @secretdef/dynata secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/dynata';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DYNATA_API_KEY` | Dynata API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
