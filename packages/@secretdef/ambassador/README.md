# @secretdef/ambassador

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Ambassador** environment variables.

## Install

```bash
npm install @secretdef/ambassador secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/ambassador';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `AMBASSADOR_CLOUD_TOKEN` | Ambassador Cloud API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
