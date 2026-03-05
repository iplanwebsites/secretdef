# @secretdef/frontegg

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Frontegg** environment variables.

## Install

```bash
npm install @secretdef/frontegg secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/frontegg';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `FRONTEGG_CLIENT_ID` | Frontegg client ID | Yes |
| `FRONTEGG_API_KEY` | Frontegg API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
