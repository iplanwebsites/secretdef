# @secretdef/omdb

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **OMDb** environment variables.

## Install

```bash
npm install @secretdef/omdb secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/omdb';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `OMDB_API_KEY` | OMDb API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
