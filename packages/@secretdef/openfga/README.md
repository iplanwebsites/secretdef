# @secretdef/openfga

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **OpenFGA** environment variables.

## Install

```bash
npm install @secretdef/openfga secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/openfga';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `FGA_API_URL` | OpenFGA API URL | Yes |
| `FGA_STORE_ID` | OpenFGA store ID | Yes |
| `FGA_API_TOKEN` | OpenFGA API token | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
