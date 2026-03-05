# @secretdef/elastic-path

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Elastic Path** environment variables.

## Install

```bash
npm install @secretdef/elastic-path secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/elastic-path';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `EPCC_CLIENT_ID` | Elastic Path Commerce Cloud client ID | Yes |
| `EPCC_CLIENT_SECRET` | Elastic Path Commerce Cloud client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
