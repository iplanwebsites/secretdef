# @secretdef/payrex

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **PayRex** environment variables.

## Install

```bash
npm install @secretdef/payrex secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/payrex';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PAYREX_SECRET_KEY` | PayRex secret key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
