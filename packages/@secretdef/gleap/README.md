# @secretdef/gleap

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Gleap** environment variables.

## Install

```bash
npm install @secretdef/gleap secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/gleap';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `GLEAP_API_KEY` | Gleap API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
