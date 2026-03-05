# @secretdef/bookeo

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Bookeo** environment variables.

## Install

```bash
npm install @secretdef/bookeo secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/bookeo';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BOOKEO_API_KEY` | Bookeo API key | Yes |
| `BOOKEO_SECRET_KEY` | Bookeo secret key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
