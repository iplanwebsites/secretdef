# @secretdef/moosend

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Moosend** environment variables.

## Install

```bash
npm install @secretdef/moosend secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/moosend';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MOOSEND_API_KEY` | Moosend API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
