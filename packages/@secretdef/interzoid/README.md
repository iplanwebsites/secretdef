# @secretdef/interzoid

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Interzoid** environment variables.

## Install

```bash
npm install @secretdef/interzoid secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/interzoid';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `INTERZOID_API_KEY` | Interzoid API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
