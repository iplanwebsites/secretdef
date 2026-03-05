# @secretdef/pesapal

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Pesapal** environment variables.

## Install

```bash
npm install @secretdef/pesapal secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/pesapal';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PESAPAL_CONSUMER_KEY` | Pesapal consumer key | Yes |
| `PESAPAL_CONSUMER_SECRET` | Pesapal consumer secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
