# @secretdef/dato-cms

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **DatoCMS** environment variables.

## Install

```bash
npm install @secretdef/dato-cms secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/dato-cms';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DATOCMS_API_TOKEN` | DatoCMS API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
