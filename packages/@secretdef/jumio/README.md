# @secretdef/jumio

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Jumio** environment variables.

## Install

```bash
npm install @secretdef/jumio secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/jumio';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `JUMIO_API_TOKEN` | Jumio API token | Yes |
| `JUMIO_API_SECRET` | Jumio API secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
