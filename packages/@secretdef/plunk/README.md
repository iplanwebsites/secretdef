# @secretdef/plunk

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Plunk** environment variables.

## Install

```bash
npm install @secretdef/plunk secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/plunk';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PLUNK_API_KEY` | Plunk email API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
