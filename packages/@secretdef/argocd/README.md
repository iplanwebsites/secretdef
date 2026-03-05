# @secretdef/argocd

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Argo CD** environment variables.

## Install

```bash
npm install @secretdef/argocd secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/argocd';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ARGOCD_AUTH_TOKEN` | Argo CD authentication token | Yes |
| `ARGOCD_SERVER` | Argo CD server URL | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
