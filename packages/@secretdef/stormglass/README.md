# @secretdef/stormglass

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Storm Glass** environment variables.

## Install

```bash
npm install @secretdef/stormglass secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/stormglass';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `STORMGLASS_API_KEY` | Storm Glass weather API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
