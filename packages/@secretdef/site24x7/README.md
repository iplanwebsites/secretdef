# @secretdef/site24x7

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Site24x7** environment variables.

## Install

```bash
npm install @secretdef/site24x7 secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/site24x7';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SITE24X7_API_KEY` | Site24x7 API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
