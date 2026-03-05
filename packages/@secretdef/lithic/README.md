# @secretdef/lithic

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Lithic** environment variables.

## Install

```bash
npm install @secretdef/lithic secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/lithic';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `LITHIC_API_KEY` | Lithic card issuing API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
