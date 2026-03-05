# @secretdef/snov

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Snov.io API** environment variables.

## Install

```bash
npm install @secretdef/snov secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/snov';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SNOV_CLIENT_ID` | Snov.io client ID | Yes |
| `SNOV_CLIENT_SECRET` | Snov.io client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
