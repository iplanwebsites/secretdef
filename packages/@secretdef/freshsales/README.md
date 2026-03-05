# @secretdef/freshsales

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Freshsales** environment variables.

## Install

```bash
npm install @secretdef/freshsales secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/freshsales';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `FRESHSALES_API_KEY` | Freshsales API key | Yes |
| `FRESHSALES_DOMAIN` | Freshsales account domain | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
