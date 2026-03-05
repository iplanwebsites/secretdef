# @secretdef/portainer

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Portainer** environment variables.

## Install

```bash
npm install @secretdef/portainer secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/portainer';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PORTAINER_API_KEY` | Portainer API key | Yes |
| `PORTAINER_URL` | Portainer instance URL | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
