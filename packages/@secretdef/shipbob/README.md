# @secretdef/shipbob

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **ShipBob** environment variables.

## Install

```bash
npm install @secretdef/shipbob secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/shipbob';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SHIPBOB_API_TOKEN` | ShipBob API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
