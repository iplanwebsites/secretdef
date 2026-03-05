# @secretdef/duffel

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Duffel** environment variables.

## Install

```bash
npm install @secretdef/duffel secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/duffel';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DUFFEL_ACCESS_TOKEN` | Duffel API access token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
