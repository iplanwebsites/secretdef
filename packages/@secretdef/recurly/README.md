# @secretdef/recurly

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Recurly** environment variables.

## Install

```bash
npm install @secretdef/recurly secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/recurly';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `RECURLY_API_KEY` | Recurly API key | Yes |
| `RECURLY_SUBDOMAIN` | Recurly subdomain | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
