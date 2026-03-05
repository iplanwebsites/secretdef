# @secretdef/clevertap

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **CleverTap** environment variables.

## Install

```bash
npm install @secretdef/clevertap secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/clevertap';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CLEVERTAP_ACCOUNT_ID` | CleverTap account ID | Yes |
| `CLEVERTAP_PASSCODE` | CleverTap account passcode | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
