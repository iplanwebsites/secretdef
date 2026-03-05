# @secretdef/setmore

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Setmore** environment variables.

## Install

```bash
npm install @secretdef/setmore secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/setmore';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SETMORE_API_KEY` | Setmore API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
