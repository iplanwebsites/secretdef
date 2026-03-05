# @secretdef/neverbounce

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **NeverBounce** environment variables.

## Install

```bash
npm install @secretdef/neverbounce secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/neverbounce';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `NEVERBOUNCE_API_KEY` | NeverBounce API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
