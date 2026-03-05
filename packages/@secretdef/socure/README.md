# @secretdef/socure

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Socure** environment variables.

## Install

```bash
npm install @secretdef/socure secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/socure';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SOCURE_API_KEY` | Socure API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
