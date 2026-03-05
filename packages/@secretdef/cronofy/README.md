# @secretdef/cronofy

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Cronofy** environment variables.

## Install

```bash
npm install @secretdef/cronofy secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/cronofy';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CRONOFY_CLIENT_ID` | Cronofy OAuth client ID | Yes |
| `CRONOFY_CLIENT_SECRET` | Cronofy OAuth client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
