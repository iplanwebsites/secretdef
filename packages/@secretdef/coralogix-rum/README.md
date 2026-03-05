# @secretdef/coralogix-rum

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Coralogix RUM** environment variables.

## Install

```bash
npm install @secretdef/coralogix-rum secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/coralogix-rum';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CORALOGIX_RUM_KEY` | Coralogix RUM key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
