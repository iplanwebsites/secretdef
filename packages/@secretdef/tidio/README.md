# @secretdef/tidio

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Tidio** environment variables.

## Install

```bash
npm install @secretdef/tidio secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/tidio';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TIDIO_API_KEY` | Tidio API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
