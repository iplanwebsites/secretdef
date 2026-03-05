# @secretdef/clearbit

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Clearbit** environment variables.

## Install

```bash
npm install @secretdef/clearbit secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/clearbit';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CLEARBIT_API_KEY` | Clearbit API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
