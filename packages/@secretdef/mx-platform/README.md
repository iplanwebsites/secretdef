# @secretdef/mx-platform

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **MX Platform** environment variables.

## Install

```bash
npm install @secretdef/mx-platform secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/mx-platform';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MX_CLIENT_ID` | MX client ID | Yes |
| `MX_API_KEY` | MX API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
