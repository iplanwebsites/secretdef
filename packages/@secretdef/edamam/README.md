# @secretdef/edamam

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Edamam** environment variables.

## Install

```bash
npm install @secretdef/edamam secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/edamam';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `EDAMAM_APP_ID` | Edamam application ID | Yes |
| `EDAMAM_APP_KEY` | Edamam application key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
