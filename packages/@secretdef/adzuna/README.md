# @secretdef/adzuna

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Adzuna** environment variables.

## Install

```bash
npm install @secretdef/adzuna secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/adzuna';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ADZUNA_APP_ID` | Adzuna application ID | Yes |
| `ADZUNA_APP_KEY` | Adzuna application key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
