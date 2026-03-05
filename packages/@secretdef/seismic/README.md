# @secretdef/seismic

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Seismic** environment variables.

## Install

```bash
npm install @secretdef/seismic secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/seismic';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SEISMIC_CLIENT_ID` | Seismic OAuth client ID | Yes |
| `SEISMIC_CLIENT_SECRET` | Seismic OAuth client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
