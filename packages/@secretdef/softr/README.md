# @secretdef/softr

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Softr** environment variables.

## Install

```bash
npm install @secretdef/softr secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/softr';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SOFTR_API_KEY` | Softr API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
