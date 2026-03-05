# @secretdef/appmixer

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Appmixer** environment variables.

## Install

```bash
npm install @secretdef/appmixer secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/appmixer';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `APPMIXER_API_KEY` | Appmixer API key | Yes |
| `APPMIXER_BASE_URL` | Appmixer base URL | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
