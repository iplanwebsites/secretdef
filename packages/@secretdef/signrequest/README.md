# @secretdef/signrequest

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **SignRequest** environment variables.

## Install

```bash
npm install @secretdef/signrequest secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/signrequest';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SIGNREQUEST_API_TOKEN` | SignRequest API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
