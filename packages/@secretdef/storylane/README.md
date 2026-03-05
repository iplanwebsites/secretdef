# @secretdef/storylane

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Storylane** environment variables.

## Install

```bash
npm install @secretdef/storylane secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/storylane';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `STORYLANE_API_KEY` | Storylane API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
