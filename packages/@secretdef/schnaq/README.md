# @secretdef/schnaq

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Schnaq** environment variables.

## Install

```bash
npm install @secretdef/schnaq secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/schnaq';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SCHNAQ_API_KEY` | Schnaq API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
