# @secretdef/incidentio

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **incident.io** environment variables.

## Install

```bash
npm install @secretdef/incidentio secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/incidentio';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `INCIDENTIO_API_KEY` | incident.io API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
