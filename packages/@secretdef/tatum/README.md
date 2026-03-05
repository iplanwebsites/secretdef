# @secretdef/tatum

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Tatum** environment variables.

## Install

```bash
npm install @secretdef/tatum secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/tatum';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TATUM_API_KEY` | Tatum API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
