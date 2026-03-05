# @secretdef/fossa

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **FOSSA** environment variables.

## Install

```bash
npm install @secretdef/fossa secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/fossa';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `FOSSA_API_KEY` | FOSSA API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
