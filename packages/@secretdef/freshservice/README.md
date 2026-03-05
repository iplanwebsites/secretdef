# @secretdef/freshservice

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Freshservice** environment variables.

## Install

```bash
npm install @secretdef/freshservice secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/freshservice';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `FRESHSERVICE_API_KEY` | Freshservice API key | Yes |
| `FRESHSERVICE_DOMAIN` | Freshservice domain | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
