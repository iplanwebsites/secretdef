# @secretdef/workable

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Workable** environment variables.

## Install

```bash
npm install @secretdef/workable secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/workable';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `WORKABLE_ACCESS_TOKEN` | Workable API access token | Yes |
| `WORKABLE_SUBDOMAIN` | Workable subdomain | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
