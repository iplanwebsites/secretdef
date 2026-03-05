# @secretdef/locize

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Locize** environment variables.

## Install

```bash
npm install @secretdef/locize secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/locize';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `LOCIZE_API_KEY` | Locize API key | Yes |
| `LOCIZE_PROJECT_ID` | Locize project ID | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
