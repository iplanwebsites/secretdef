# @secretdef/commento

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Commento** environment variables.

## Install

```bash
npm install @secretdef/commento secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/commento';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `COMMENTO_ORIGIN` | Commento instance URL | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
