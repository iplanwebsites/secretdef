# @secretdef/mollie

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Mollie** environment variables.

## Install

```bash
npm install @secretdef/mollie secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/mollie';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MOLLIE_API_KEY` | Mollie API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
