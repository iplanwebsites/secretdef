# @secretdef/shipengine

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **ShipEngine** environment variables.

## Install

```bash
npm install @secretdef/shipengine secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/shipengine';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SHIPENGINE_API_KEY` | ShipEngine API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
