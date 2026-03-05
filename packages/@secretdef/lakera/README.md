# @secretdef/lakera

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Lakera Guard** environment variables.

## Install

```bash
npm install @secretdef/lakera secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/lakera';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `LAKERA_GUARD_API_KEY` | Lakera Guard API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
