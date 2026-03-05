# @secretdef/lob

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Lob** environment variables.

## Install

```bash
npm install @secretdef/lob secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/lob';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `LOB_API_KEY` | Lob API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
