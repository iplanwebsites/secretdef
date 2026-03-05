# @secretdef/playfab

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **PlayFab** environment variables.

## Install

```bash
npm install @secretdef/playfab secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/playfab';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PLAYFAB_TITLE_ID` | PlayFab title ID | Yes |
| `PLAYFAB_SECRET_KEY` | PlayFab developer secret key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
