# @secretdef/raven

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Raven** environment variables.

## Install

```bash
npm install @secretdef/raven secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/raven';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `RAVEN_API_KEY` | Raven messaging API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
