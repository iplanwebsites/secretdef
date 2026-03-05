# @secretdef/giphy

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **GIPHY** environment variables.

## Install

```bash
npm install @secretdef/giphy secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/giphy';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `GIPHY_API_KEY` | GIPHY API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
