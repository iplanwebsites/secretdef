# @secretdef/slickplan

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Slickplan** environment variables.

## Install

```bash
npm install @secretdef/slickplan secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/slickplan';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SLICKPLAN_API_KEY` | Slickplan API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
