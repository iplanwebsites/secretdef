# @secretdef/procreate

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Procreate** environment variables.

## Install

```bash
npm install @secretdef/procreate secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/procreate';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PROCREATE_API_KEY` | Procreate API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
