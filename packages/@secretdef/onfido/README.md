# @secretdef/onfido

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Onfido** environment variables.

## Install

```bash
npm install @secretdef/onfido secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/onfido';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ONFIDO_API_TOKEN` | Onfido API token | Yes |
| `ONFIDO_REGION` | Onfido API region | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
