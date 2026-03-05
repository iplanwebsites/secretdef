# @secretdef/thumbor

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Thumbor** environment variables.

## Install

```bash
npm install @secretdef/thumbor secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/thumbor';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `THUMBOR_SECURITY_KEY` | Thumbor security key | Yes |
| `THUMBOR_URL` | Thumbor server URL | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
