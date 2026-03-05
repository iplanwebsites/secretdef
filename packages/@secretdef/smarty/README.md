# @secretdef/smarty

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Smarty (SmartyStreets)** environment variables.

## Install

```bash
npm install @secretdef/smarty secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/smarty';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SMARTY_AUTH_ID` | Smarty authentication ID | Yes |
| `SMARTY_AUTH_TOKEN` | Smarty authentication token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
