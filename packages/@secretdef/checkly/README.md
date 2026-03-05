# @secretdef/checkly

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Checkly** environment variables.

## Install

```bash
npm install @secretdef/checkly secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/checkly';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CHECKLY_API_KEY` | Checkly API key | Yes |
| `CHECKLY_ACCOUNT_ID` | Checkly account ID | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
