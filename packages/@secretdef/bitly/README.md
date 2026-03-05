# @secretdef/bitly

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Bitly** environment variables.

## Install

```bash
npm install @secretdef/bitly secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/bitly';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BITLY_ACCESS_TOKEN` | Bitly access token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
