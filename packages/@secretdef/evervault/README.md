# @secretdef/evervault

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Evervault** environment variables.

## Install

```bash
npm install @secretdef/evervault secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/evervault';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `EVERVAULT_API_KEY` | Evervault API key | Yes |
| `EVERVAULT_APP_UUID` | Evervault app UUID | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
