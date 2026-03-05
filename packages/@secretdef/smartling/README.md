# @secretdef/smartling

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Smartling** environment variables.

## Install

```bash
npm install @secretdef/smartling secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/smartling';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SMARTLING_USER_ID` | Smartling user identifier | Yes |
| `SMARTLING_USER_SECRET` | Smartling user secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
