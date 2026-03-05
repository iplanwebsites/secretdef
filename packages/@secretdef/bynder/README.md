# @secretdef/bynder

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Bynder** environment variables.

## Install

```bash
npm install @secretdef/bynder secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/bynder';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BYNDER_DOMAIN` | Bynder portal domain | Yes |
| `BYNDER_CLIENT_ID` | Bynder OAuth client ID | Yes |
| `BYNDER_CLIENT_SECRET` | Bynder OAuth client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
