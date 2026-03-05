# @secretdef/fred

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **FRED (Federal Reserve)** environment variables.

## Install

```bash
npm install @secretdef/fred secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/fred';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `FRED_API_KEY` | FRED economic data API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
