# @secretdef/retool

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Retool** environment variables.

## Install

```bash
npm install @secretdef/retool secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/retool';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `RETOOL_API_KEY` | Retool API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
