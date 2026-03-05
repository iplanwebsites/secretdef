# @secretdef/vapi

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Vapi** environment variables.

## Install

```bash
npm install @secretdef/vapi secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/vapi';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `VAPI_API_KEY` | Vapi voice AI API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
