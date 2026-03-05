# @secretdef/breezy-hr

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Breezy HR** environment variables.

## Install

```bash
npm install @secretdef/breezy-hr secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/breezy-hr';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BREEZY_API_KEY` | Breezy HR API key | Yes |
| `BREEZY_COMPANY_ID` | Breezy HR company ID | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
