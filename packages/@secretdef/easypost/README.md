# @secretdef/easypost

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **EasyPost** environment variables.

## Install

```bash
npm install @secretdef/easypost secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/easypost';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `EASYPOST_API_KEY` | EasyPost API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
