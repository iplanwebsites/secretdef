# @secretdef/fathom

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Fathom Analytics** environment variables.

## Install

```bash
npm install @secretdef/fathom secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/fathom';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `FATHOM_SITE_ID` | Fathom site ID | Yes |
| `FATHOM_API_KEY` | Fathom API key | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
