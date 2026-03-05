# @secretdef/taxjar

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **TaxJar** environment variables.

## Install

```bash
npm install @secretdef/taxjar secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/taxjar';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TAXJAR_API_KEY` | TaxJar API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
