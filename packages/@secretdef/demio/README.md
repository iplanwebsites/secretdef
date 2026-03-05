# @secretdef/demio

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Demio** environment variables.

## Install

```bash
npm install @secretdef/demio secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/demio';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DEMIO_API_KEY` | Demio webinar API key | Yes |
| `DEMIO_API_SECRET` | Demio API secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
