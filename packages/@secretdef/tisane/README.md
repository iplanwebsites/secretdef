# @secretdef/tisane

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Tisane** environment variables.

## Install

```bash
npm install @secretdef/tisane secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/tisane';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TISANE_API_KEY` | Tisane API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
