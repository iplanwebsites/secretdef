# @secretdef/elarian

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Elarian** environment variables.

## Install

```bash
npm install @secretdef/elarian secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/elarian';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ELARIAN_API_KEY` | Elarian API key | Yes |
| `ELARIAN_ORG_ID` | Elarian organization ID | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
