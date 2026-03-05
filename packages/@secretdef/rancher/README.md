# @secretdef/rancher

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Rancher** environment variables.

## Install

```bash
npm install @secretdef/rancher secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/rancher';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `RANCHER_ACCESS_KEY` | Rancher API access key | Yes |
| `RANCHER_SECRET_KEY` | Rancher API secret key | Yes |
| `RANCHER_SERVER_URL` | Rancher server URL | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
