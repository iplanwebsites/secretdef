# @secretdef/regal

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Regal.io** environment variables.

## Install

```bash
npm install @secretdef/regal secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/regal';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `REGAL_API_KEY` | Regal.io API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
