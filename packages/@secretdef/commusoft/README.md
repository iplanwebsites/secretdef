# @secretdef/commusoft

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Commusoft** environment variables.

## Install

```bash
npm install @secretdef/commusoft secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/commusoft';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `COMMUSOFT_API_KEY` | Commusoft API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
