# @secretdef/octopus-deploy

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Octopus Deploy** environment variables.

## Install

```bash
npm install @secretdef/octopus-deploy secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/octopus-deploy';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `OCTOPUS_URL` | Octopus Deploy server URL | Yes |
| `OCTOPUS_API_KEY` | Octopus Deploy API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
