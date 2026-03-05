# @secretdef/folk

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Folk CRM** environment variables.

## Install

```bash
npm install @secretdef/folk secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/folk';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `FOLK_API_KEY` | Folk CRM API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
