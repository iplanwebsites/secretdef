# @secretdef/sightengine

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Sightengine** environment variables.

## Install

```bash
npm install @secretdef/sightengine secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/sightengine';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SIGHTENGINE_API_USER` | Sightengine API user | Yes |
| `SIGHTENGINE_API_SECRET` | Sightengine API secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
