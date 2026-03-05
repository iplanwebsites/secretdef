# @secretdef/stackpath

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **StackPath** environment variables.

## Install

```bash
npm install @secretdef/stackpath secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/stackpath';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `STACKPATH_CLIENT_ID` | StackPath OAuth client ID | Yes |
| `STACKPATH_CLIENT_SECRET` | StackPath OAuth client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
