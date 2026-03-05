# @secretdef/polygon-io

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Polygon.io** environment variables.

## Install

```bash
npm install @secretdef/polygon-io secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/polygon-io';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `POLYGON_API_KEY` | Polygon.io stocks/crypto API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
