# @secretdef/fibery

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Fibery** environment variables.

## Install

```bash
npm install @secretdef/fibery secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/fibery';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `FIBERY_API_KEY` | Fibery API key | Yes |
| `FIBERY_DOMAIN` | Fibery workspace domain | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
