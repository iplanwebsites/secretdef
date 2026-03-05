# @secretdef/zerobounce

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **ZeroBounce** environment variables.

## Install

```bash
npm install @secretdef/zerobounce secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/zerobounce';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ZEROBOUNCE_API_KEY` | ZeroBounce email verification API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
