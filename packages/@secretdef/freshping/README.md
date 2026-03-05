# @secretdef/freshping

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Freshping** environment variables.

## Install

```bash
npm install @secretdef/freshping secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/freshping';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `FRESHPING_API_KEY` | Freshping API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
