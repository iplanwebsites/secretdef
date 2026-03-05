# @secretdef/copper

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Copper CRM** environment variables.

## Install

```bash
npm install @secretdef/copper secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/copper';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `COPPER_API_KEY` | Copper API key | Yes |
| `COPPER_USER_EMAIL` | Copper user email | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
