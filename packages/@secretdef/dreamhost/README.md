# @secretdef/dreamhost

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **DreamHost** environment variables.

## Install

```bash
npm install @secretdef/dreamhost secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/dreamhost';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DREAMHOST_API_KEY` | DreamHost API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
