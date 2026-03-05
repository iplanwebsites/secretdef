# @secretdef/transloadit

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Transloadit** environment variables.

## Install

```bash
npm install @secretdef/transloadit secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/transloadit';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TRANSLOADIT_AUTH_KEY` | Transloadit auth key | Yes |
| `TRANSLOADIT_AUTH_SECRET` | Transloadit auth secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
