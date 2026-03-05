# @secretdef/pingdom

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Pingdom** environment variables.

## Install

```bash
npm install @secretdef/pingdom secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/pingdom';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PINGDOM_API_TOKEN` | Pingdom API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
