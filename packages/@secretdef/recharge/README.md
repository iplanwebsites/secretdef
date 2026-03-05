# @secretdef/recharge

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Recharge** environment variables.

## Install

```bash
npm install @secretdef/recharge secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/recharge';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `RECHARGE_API_TOKEN` | Recharge API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
