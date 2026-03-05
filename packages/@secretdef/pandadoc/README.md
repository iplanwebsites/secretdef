# @secretdef/pandadoc

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **PandaDoc** environment variables.

## Install

```bash
npm install @secretdef/pandadoc secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/pandadoc';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PANDADOC_API_KEY` | PandaDoc API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
