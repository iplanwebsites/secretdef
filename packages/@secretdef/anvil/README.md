# @secretdef/anvil

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Anvil** environment variables.

## Install

```bash
npm install @secretdef/anvil secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/anvil';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ANVIL_API_KEY` | Anvil API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
