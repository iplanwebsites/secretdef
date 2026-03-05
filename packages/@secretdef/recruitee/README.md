# @secretdef/recruitee

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Recruitee** environment variables.

## Install

```bash
npm install @secretdef/recruitee secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/recruitee';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `RECRUITEE_API_TOKEN` | Recruitee API token | Yes |
| `RECRUITEE_COMPANY_ID` | Recruitee company ID | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
