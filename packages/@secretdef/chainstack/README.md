# @secretdef/chainstack

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Chainstack** environment variables.

## Install

```bash
npm install @secretdef/chainstack secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/chainstack';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CHAINSTACK_API_KEY` | Chainstack API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
