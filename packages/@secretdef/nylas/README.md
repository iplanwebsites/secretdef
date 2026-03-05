# @secretdef/nylas

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Nylas** environment variables.

## Install

```bash
npm install @secretdef/nylas secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/nylas';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `NYLAS_API_KEY` | Nylas API key | Yes |
| `NYLAS_GRANT_ID` | Nylas grant ID | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
