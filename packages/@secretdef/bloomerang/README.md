# @secretdef/bloomerang

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Bloomerang** environment variables.

## Install

```bash
npm install @secretdef/bloomerang secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/bloomerang';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BLOOMERANG_API_KEY` | Bloomerang API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
