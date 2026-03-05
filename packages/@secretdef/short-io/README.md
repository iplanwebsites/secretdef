# @secretdef/short-io

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Short.io** environment variables.

## Install

```bash
npm install @secretdef/short-io secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/short-io';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SHORTIO_API_KEY` | Short.io API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
