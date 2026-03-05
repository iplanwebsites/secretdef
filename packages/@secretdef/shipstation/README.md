# @secretdef/shipstation

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **ShipStation** environment variables.

## Install

```bash
npm install @secretdef/shipstation secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/shipstation';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SHIPSTATION_API_KEY` | ShipStation API key | Yes |
| `SHIPSTATION_API_SECRET` | ShipStation API secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
