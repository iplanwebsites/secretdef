# @secretdef/pexip

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Pexip** environment variables.

## Install

```bash
npm install @secretdef/pexip secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/pexip';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PEXIP_API_TOKEN` | Pexip management API token | Yes |
| `PEXIP_URL` | Pexip management URL | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
