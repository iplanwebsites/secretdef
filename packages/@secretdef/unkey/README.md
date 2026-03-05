# @secretdef/unkey

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Unkey** environment variables.

## Install

```bash
npm install @secretdef/unkey secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/unkey';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `UNKEY_ROOT_KEY` | Unkey root key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
