# @secretdef/rippling

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Rippling** environment variables.

## Install

```bash
npm install @secretdef/rippling secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/rippling';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `RIPPLING_API_KEY` | Rippling API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
