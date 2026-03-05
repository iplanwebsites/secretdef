# @secretdef/appcues

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Appcues** environment variables.

## Install

```bash
npm install @secretdef/appcues secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/appcues';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `APPCUES_ACCOUNT_ID` | Appcues account ID | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
