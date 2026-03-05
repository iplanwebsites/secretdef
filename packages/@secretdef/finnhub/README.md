# @secretdef/finnhub

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Finnhub** environment variables.

## Install

```bash
npm install @secretdef/finnhub secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/finnhub';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `FINNHUB_API_KEY` | Finnhub stock API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
