# @secretdef/coralogix

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Coralogix** environment variables.

## Install

```bash
npm install @secretdef/coralogix secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/coralogix';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CORALOGIX_API_KEY` | Coralogix API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
