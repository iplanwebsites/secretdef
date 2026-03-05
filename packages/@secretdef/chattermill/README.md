# @secretdef/chattermill

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Chattermill** environment variables.

## Install

```bash
npm install @secretdef/chattermill secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/chattermill';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CHATTERMILL_API_KEY` | Chattermill API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
