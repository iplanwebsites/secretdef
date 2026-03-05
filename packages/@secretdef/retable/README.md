# @secretdef/retable

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Retable** environment variables.

## Install

```bash
npm install @secretdef/retable secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/retable';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `RETABLE_API_KEY` | Retable API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
