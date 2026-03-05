# @secretdef/vestaboard

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Vestaboard** environment variables.

## Install

```bash
npm install @secretdef/vestaboard secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/vestaboard';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `VESTABOARD_API_KEY` | Vestaboard API key | Yes |
| `VESTABOARD_API_SECRET` | Vestaboard API secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
