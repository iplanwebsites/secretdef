# @secretdef/tiger-beetle

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **TigerBeetle** environment variables.

## Install

```bash
npm install @secretdef/tiger-beetle secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/tiger-beetle';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TIGERBEETLE_CLUSTER_ID` | TigerBeetle cluster ID | Yes |
| `TIGERBEETLE_ADDRESSES` | TigerBeetle addresses | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
