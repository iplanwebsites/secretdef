# @secretdef/runway

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Runway** environment variables.

## Install

```bash
npm install @secretdef/runway secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/runway';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `RUNWAYML_API_SECRET` | Runway API secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
