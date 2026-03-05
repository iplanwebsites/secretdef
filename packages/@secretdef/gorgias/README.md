# @secretdef/gorgias

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Gorgias** environment variables.

## Install

```bash
npm install @secretdef/gorgias secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/gorgias';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `GORGIAS_API_KEY` | Gorgias API key | Yes |
| `GORGIAS_ACCOUNT` | Gorgias account subdomain | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
