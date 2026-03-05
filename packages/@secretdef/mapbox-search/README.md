# @secretdef/mapbox-search

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Mapbox Search** environment variables.

## Install

```bash
npm install @secretdef/mapbox-search secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/mapbox-search';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MAPBOX_SEARCH_TOKEN` | Mapbox Search API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
