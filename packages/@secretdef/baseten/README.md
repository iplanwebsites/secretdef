# @secretdef/baseten

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Baseten** environment variables.

## Install

```bash
npm install @secretdef/baseten secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/baseten';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BASETEN_API_KEY` | Baseten API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
