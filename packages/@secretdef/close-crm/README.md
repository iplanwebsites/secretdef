# @secretdef/close-crm

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Close CRM** environment variables.

## Install

```bash
npm install @secretdef/close-crm secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/close-crm';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CLOSEIO_API_KEY` | Close CRM API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
