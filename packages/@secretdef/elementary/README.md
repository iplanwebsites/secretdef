# @secretdef/elementary

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Elementary** environment variables.

## Install

```bash
npm install @secretdef/elementary secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/elementary';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ELEMENTARY_API_KEY` | Elementary data observability API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
