# @secretdef/vitally

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Vitally** environment variables.

## Install

```bash
npm install @secretdef/vitally secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/vitally';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `VITALLY_API_KEY` | Vitally API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
