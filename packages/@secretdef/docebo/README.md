# @secretdef/docebo

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Docebo** environment variables.

## Install

```bash
npm install @secretdef/docebo secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/docebo';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DOCEBO_CLIENT_ID` | Docebo OAuth client ID | Yes |
| `DOCEBO_CLIENT_SECRET` | Docebo OAuth client secret | Yes |
| `DOCEBO_BASE_URL` | Docebo platform URL | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
