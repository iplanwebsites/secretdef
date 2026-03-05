# @secretdef/didomi

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Didomi** environment variables.

## Install

```bash
npm install @secretdef/didomi secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/didomi';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DIDOMI_API_KEY` | Didomi API key | Yes |
| `DIDOMI_SECRET_KEY` | Didomi secret key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
