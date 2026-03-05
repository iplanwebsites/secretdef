# @secretdef/browserbase

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Browserbase** environment variables.

## Install

```bash
npm install @secretdef/browserbase secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/browserbase';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BROWSERBASE_API_KEY` | Browserbase API key | Yes |
| `BROWSERBASE_PROJECT_ID` | Browserbase project ID | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
