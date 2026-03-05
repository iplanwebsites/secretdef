# @secretdef/exotel

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Exotel** environment variables.

## Install

```bash
npm install @secretdef/exotel secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/exotel';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `EXOTEL_API_KEY` | Exotel API key | Yes |
| `EXOTEL_API_TOKEN` | Exotel API token | Yes |
| `EXOTEL_SID` | Exotel account SID | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
