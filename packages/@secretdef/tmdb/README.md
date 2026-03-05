# @secretdef/tmdb

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **TMDB (The Movie Database)** environment variables.

## Install

```bash
npm install @secretdef/tmdb secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/tmdb';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TMDB_API_KEY` | TMDB API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
