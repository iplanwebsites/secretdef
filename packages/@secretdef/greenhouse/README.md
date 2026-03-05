# @secretdef/greenhouse

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Greenhouse** environment variables.

## Install

```bash
npm install @secretdef/greenhouse secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/greenhouse';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `GREENHOUSE_API_KEY` | Greenhouse Harvest API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
