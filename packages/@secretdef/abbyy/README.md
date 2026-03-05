# @secretdef/abbyy

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **ABBYY** environment variables.

## Install

```bash
npm install @secretdef/abbyy secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/abbyy';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ABBYY_APP_ID` | ABBYY application ID | Yes |
| `ABBYY_APP_PASSWORD` | ABBYY application password | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
