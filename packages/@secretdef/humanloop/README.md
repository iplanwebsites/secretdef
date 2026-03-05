# @secretdef/humanloop

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Humanloop** environment variables.

## Install

```bash
npm install @secretdef/humanloop secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/humanloop';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `HUMANLOOP_API_KEY` | Humanloop API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
