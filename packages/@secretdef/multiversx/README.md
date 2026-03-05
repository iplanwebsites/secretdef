# @secretdef/multiversx

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **MultiversX** environment variables.

## Install

```bash
npm install @secretdef/multiversx secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/multiversx';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MULTIVERSX_API_KEY` | MultiversX API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
