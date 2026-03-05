# @secretdef/readme

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **ReadMe** environment variables.

## Install

```bash
npm install @secretdef/readme secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/readme';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `README_API_KEY` | ReadMe API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
