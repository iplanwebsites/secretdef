# @secretdef/nhost

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Nhost** environment variables.

## Install

```bash
npm install @secretdef/nhost secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/nhost';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `NHOST_SUBDOMAIN` | Nhost project subdomain | Yes |
| `NHOST_REGION` | Nhost project region | No |
| `NHOST_ADMIN_SECRET` | Nhost admin secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
