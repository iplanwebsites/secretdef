# @secretdef/elastic-email

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Elastic Email** environment variables.

## Install

```bash
npm install @secretdef/elastic-email secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/elastic-email';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ELASTIC_EMAIL_API_KEY` | Elastic Email API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
