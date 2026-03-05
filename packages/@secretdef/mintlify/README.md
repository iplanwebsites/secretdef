# @secretdef/mintlify

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Mintlify** environment variables.

## Install

```bash
npm install @secretdef/mintlify secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/mintlify';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MINTLIFY_API_KEY` | Mintlify API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
