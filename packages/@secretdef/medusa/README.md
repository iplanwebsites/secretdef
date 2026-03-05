# @secretdef/medusa

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Medusa** environment variables.

## Install

```bash
npm install @secretdef/medusa secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/medusa';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MEDUSA_BACKEND_URL` | Medusa backend URL | Yes |
| `MEDUSA_PUBLISHABLE_KEY` | Medusa publishable API key | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
