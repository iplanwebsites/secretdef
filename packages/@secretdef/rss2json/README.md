# @secretdef/rss2json

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **RSS2JSON** environment variables.

## Install

```bash
npm install @secretdef/rss2json secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/rss2json';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `RSS2JSON_API_KEY` | RSS2JSON API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
