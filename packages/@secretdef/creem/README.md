# @secretdef/creem

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Creem** environment variables.

## Install

```bash
npm install @secretdef/creem secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/creem';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CREEM_API_KEY` | Creem API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
