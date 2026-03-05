# @secretdef/descope

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Descope** environment variables.

## Install

```bash
npm install @secretdef/descope secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/descope';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DESCOPE_PROJECT_ID` | Descope project ID | Yes |
| `DESCOPE_MANAGEMENT_KEY` | Descope management key | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
