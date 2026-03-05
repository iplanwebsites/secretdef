# @secretdef/igdb

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **IGDB** environment variables.

## Install

```bash
npm install @secretdef/igdb secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/igdb';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `IGDB_CLIENT_ID` | IGDB (Twitch) client ID | Yes |
| `IGDB_CLIENT_SECRET` | IGDB (Twitch) client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
