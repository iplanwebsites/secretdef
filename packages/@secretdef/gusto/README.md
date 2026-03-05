# @secretdef/gusto

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Gusto** environment variables.

## Install

```bash
npm install @secretdef/gusto secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/gusto';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `GUSTO_CLIENT_ID` | Gusto OAuth client ID | Yes |
| `GUSTO_CLIENT_SECRET` | Gusto OAuth client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
