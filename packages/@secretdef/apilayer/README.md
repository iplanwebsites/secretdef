# @secretdef/apilayer

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **APILayer** environment variables.

## Install

```bash
npm install @secretdef/apilayer secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/apilayer';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `APILAYER_API_KEY` | APILayer API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
