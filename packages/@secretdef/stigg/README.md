# @secretdef/stigg

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Stigg** environment variables.

## Install

```bash
npm install @secretdef/stigg secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/stigg';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `STIGG_SERVER_API_KEY` | Stigg server API key | Yes |
| `STIGG_CLIENT_API_KEY` | Stigg client API key | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
