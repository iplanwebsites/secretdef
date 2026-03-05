# @secretdef/salesflare

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Salesflare** environment variables.

## Install

```bash
npm install @secretdef/salesflare secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/salesflare';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SALESFLARE_API_KEY` | Salesflare API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
