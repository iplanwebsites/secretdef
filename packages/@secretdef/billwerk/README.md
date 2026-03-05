# @secretdef/billwerk

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Billwerk+** environment variables.

## Install

```bash
npm install @secretdef/billwerk secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/billwerk';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BILLWERK_API_KEY` | Billwerk+ API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
