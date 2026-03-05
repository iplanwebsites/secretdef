# @secretdef/eppo

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Eppo** environment variables.

## Install

```bash
npm install @secretdef/eppo secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/eppo';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `EPPO_API_KEY` | Eppo API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
