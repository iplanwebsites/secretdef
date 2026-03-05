# @secretdef/numverify

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **numverify** environment variables.

## Install

```bash
npm install @secretdef/numverify secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/numverify';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `NUMVERIFY_API_KEY` | numverify API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
